import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

// user registration
export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ message: "User Already exist" });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      ...req.body,
      profilePic: req.file.filename,
      password: hashPassword,
      views: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 1000),
    });
    await newUser.save();
    res.status(201).json({ message: "Register successful" });
  } catch (error) {
    next(error);
  }
};

// user login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
    }

    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
      }
    );

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
      }
    );

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: parseInt(process.env.MAX_AGE, 10),
    });

    res
      .status(200)
      .json({ message: "Login successful", userId: user._id, accessToken });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// refresh access token

export const refresh = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
      return res.status(401).send("Access Denied");
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send("Invalid Token");
      }
      const accessToken = jwt.sign(
        { id: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
        }
      );
      res.status(200).json({ accessToken });
    });
  } catch (error) {
    next(error);
  }
};
