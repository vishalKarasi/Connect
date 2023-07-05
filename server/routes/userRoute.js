import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import {
  getUser,
  getUserFriends,
  addRemoveUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/:userId", verifyToken, getUser);
router.get("/:userId/friends", verifyToken, getUserFriends);
router.patch("/:userId/:friendId", verifyToken, addRemoveUser);

export default router;
