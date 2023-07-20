import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: { type: String, min: 2, max: 50, required: true },
    email: { type: String, max: 50, required: true, unique: true },
    password: { type: String, min: 5, required: true },
    profilePic: { type: String, required: true },
    friends: { type: Array, default: [] },
    location: String,
    occupation: String,
    views: Number,
    likes: Number,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
