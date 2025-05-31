import express from "express";
import {
  addBlog,
  addComment,
  DeleteBlogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import { protect } from "../middleware/authMiddleware.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), protect, addBlog);
blogRouter.get("/getAll", getAllBlogs);
blogRouter.get("/get/:blogId", getBlogById);
blogRouter.post("/delete-blog", protect, DeleteBlogById);
blogRouter.post("/toggle-publish", protect, togglePublish);

blogRouter.post("/add-comment", addComment);
blogRouter.get("/getBlog-comments", getBlogComments);

blogRouter.post("/ai/generate", protect, generateContent);

export default blogRouter;
