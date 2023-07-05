import { api } from "./baseApi";

export const getUserApi = (userId) => {
  return api.get(`/user/${userId}`);
};

export const getUserFriendApi = (userId) => {
  return api.get(`/user/${userId}`);
};

export const addRemoveUserApi = (userId, friendId) => {
  return api.patch(`/user/${userId}/${friendId}`);
};
