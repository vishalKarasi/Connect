import { publicAxios, cookieAxios } from "./baseApi";

export const registerApi = (user) => {
  return publicAxios.post("/auth/register", user);
};

export const loginApi = (user) => {
  return cookieAxios.post("/auth/login", user);
};

export const refreshTokenApi = () => {
  return cookieAxios.get("/auth/refresh");
};
