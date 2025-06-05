import fs from "fs";
import imagekit from "../config/imageKit.js";
import Blog from "../models/blogModel.js";
import Comment from "../models/commentModel.js";
import main from "../config/gemini.js";

// add blog
export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );

    const imageFile = req.file;

    //  check is all fields are present or not
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "All field are required" });
    }

    // Upload image to image kit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // optimization through imageKit URL transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" }, //  Auto compression
        { format: "webp" }, // Convert to modern format
        { width: "1280" }, // width resizing
      ],
    });

    const image = optimizedImageUrl;
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });
    res.json({ success: true, message: "Blog added successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//  Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

//  Get all blogs
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

//  delete blog by id
export const DeleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);

    //  delete all comments associated with the blog
    await Comment.deleteMany({ blog: id });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

//  publish
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: "Blog status updated successfully" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// add comments
export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });
    res.json({ success: true, message: "Comment added for review" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// get blog comments
export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

// ai generate content
export const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;
    const content = await main(
      prompt + "Generate a blog content for this topic in simple text format"
    );
    res.json({ success: true, content });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
