import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/UserModel.js";

// user registration
export const register = async (req, res, next) => {
  try {
    console.log(req.body);
    const { password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
      views: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 1000),
    });
    await newUser.save();
    res.status(201).json({ message: "Singup successful" });
  } catch (error) {
    next(error);
  }
};

// user login
export const login = async (req, res, next) => {
  try {
    console.log(req.body);
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
        expiresIn: "15m",
      }
    );
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.cookie("refresh_token", refreshToken, {
      httpOnly: true,
      // secure: true,
      sameSite: "strict",
    });

    delete user.password;
    res.status(200).json({ user, accessToken });
  } catch (error) {
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
          expiresIn: "15m",
        }
      );
      res.status(200).json({ accessToken });
    });
  } catch (error) {
    next(error);
  }
};
