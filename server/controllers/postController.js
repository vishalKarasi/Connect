import { User } from "@models/UserModel";
import Post from "@models/postModel";

// createPost
export const createPost = async (req, res, next) => {
  try {
    const { userId, description, postPic } = req.body;
    const user = await User.findById(userId);
    const newPost = await Post({
      username: user,
      location: user.location,
      profilePic: user.profilePic,
      description,
      postPic,
      likes: {},
      coments: [],
    });

    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

// get all posts
export const getFeedPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// get all user posts
export const getUserPosts = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// update like
export const likePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(postId);
    const isLiked = post.likes.get(userId);
    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatePost = await Post.findByIdAndUpdate(
      postId,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatePost);
  } catch (error) {
    next(error);
  }
};
