import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@models/UserModel.js";

// user registration
export const register = async (req, res, next) => {
  try {
    const { password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      ...req.body,
      password: hashPassword,
      views: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 1000),
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
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
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};
