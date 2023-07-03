import express from "express";
import { register, login } from "@controllers/authController.js";
import multer from "@middlewares/multer.js";

const router = express.Router();

router.get("/register", multer.single("profilePic"), register);
router.get("/login", login);

export default router;
