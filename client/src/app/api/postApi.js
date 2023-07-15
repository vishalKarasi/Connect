import privateApi, { publicApi } from "./baseApi";

export const createPostApi = (post) => {
  return privateApi.post("/post/", post);
};

export const getFeedPostsApi = () => {
  return publicApi.get("/post/");
};

export const getUserPostsApi = (userId) => {
  return publicApi.get(`/post/${userId}`);
};

export const likePost = (postId) => {
  return privateApi.patch(`/post/${postId}`);
};
