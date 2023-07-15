import privateApi, { publicApi } from "./baseApi";

export const registerApi = (user) => {
  return publicApi.post("/auth/register", user);
};

export const loginApi = (user) => {
  return publicApi.post("/auth/login", user);
};

export const refreshTokenApi = () => {
  return privateApi.get("/auth/refresh");
};
