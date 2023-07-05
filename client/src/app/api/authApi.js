import { api } from "./baseApi";

export const registerApi = (user) => {
  return api.post("/auth/register", user);
};

export const loginApi = (user) => {
  return api.get("/auth/login", user);
};

export const refreshTokenApi = () => {
  return api.get("/auth/refresh");
};
