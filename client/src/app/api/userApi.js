import { publicAxios, privateAxios } from "./baseApi";

export const getUserApi = (userId) => {
  return publicAxios.get(`/user/${userId}`);
};

export const getUserFriendApi = (userId) => {
  return publicAxios.get(`/user/${userId}`);
};

export const addRemoveUserApi = (userId, friendId) => {
  return privateAxios.patch(`/user/${userId}/${friendId}`);
};
