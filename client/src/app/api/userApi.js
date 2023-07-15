import privateApi, { publicApi } from "./baseApi";

export const getUserApi = (userId) => {
  return publicApi.get(`/user/${userId}`);
};

export const getUserFriendApi = (userId) => {
  return publicApi.get(`/user/${userId}`);
};

export const addRemoveUserApi = (userId, friendId) => {
  return privateApi.patch(`/user/${userId}/${friendId}`);
};
