import express from "express";
import { verifyToken } from "@middlewares/authorize";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "@controllers/postController";

const router = express.Router();

router.get("/", verifyToken, createPost);
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:postId/like", verifyToken, likePost);

export default router;
