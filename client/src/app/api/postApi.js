import { api } from "./baseApi";

export const createPostApi = (post) => {
  return api.post("/post/", post);
};

export const getFeedPostsApi = () => {
  return api.get("/post/");
};

export const getUserPostsApi = (userId) => {
  return api.get(`/post/${userId}`);
};

export const likePost = (postId) => {
  return api.patch(`/post/${postId}`);
};
