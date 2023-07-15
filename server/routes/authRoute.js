import express from "express";
import { register, login, refresh } from "../controllers/authController.js";
import { parserImg } from "../middlewares/multer.js";

const router = express.Router();

router.post("/register", parserImg.single("profilePic"), register);
router.post("/login", login);
router.get("/refresh", refresh);

export default router;
