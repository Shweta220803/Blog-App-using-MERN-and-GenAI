import express from "express";
import {
  adminLogin,
  approveCommentById,
  deleteCommentById,
  getAllBlogsAdmin,
  getAllComments,
  getDashboard,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/comments", protect, getAllComments);
adminRouter.get("/blogs", protect, getAllBlogsAdmin);
adminRouter.post("/delete-comment", protect, deleteCommentById);
adminRouter.post("/approve-comment", protect, approveCommentById);
adminRouter.get("/dashboard", protect, getDashboard);

export default adminRouter;
