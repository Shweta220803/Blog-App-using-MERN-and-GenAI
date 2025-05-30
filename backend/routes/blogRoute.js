import express from "express";
import {
  addBlog,
  DeleteBlogById,
  getAllBlogs,
  getBlogById,
  togglePublish,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import { protect } from "../middleware/authMiddleware.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), protect, addBlog);
blogRouter.get("/getAll", getAllBlogs);
blogRouter.get("/get/:blogId", getBlogById);
blogRouter.delete("/add", protect, DeleteBlogById);
blogRouter.post("/toggle-publish", protect, togglePublish);

export default blogRouter;
