import mongoose, { Mongoose } from "mongoose";

const PostSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    username: { type: String, required: true },
    location: String,
    description: String,
    postPic: String,
    profilePic: String,
    likes: { type: Map, of: Boolean },
    Comment: { type: Array, default: [] },
  },
  { timestamps: true }
);

export const Post = mongoose.model("Post", PostSchema);
