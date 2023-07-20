import { publicAxios, privateAxios } from "./baseApi";

export const getFeedPostsApi = () => {
  return publicAxios.get("/post/");
};

export const getUserPostsApi = (userId) => {
  return publicAxios.get(`/post/${userId}`);
};

export const createPostApi = (post) => {
  return privateAxios.post("/post/", post);
};

export const deletePostApi = (postId) => {
  return privateAxios.delete(`/post/${postId}`);
};

export const updatePostApi = (postId, post) => {
  return privateAxios.put(`/post/${postId}`, post);
};

export const likePost = (postId) => {
  return privateAxios.patch(`/post/${postId}`);
};
