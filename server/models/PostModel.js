import mongoose from "mongoose";

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

const Post = mongoose.Model("Post", PostSchema);

export default Post;
