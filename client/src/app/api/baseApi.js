import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "@app/reducers/authSlice";

export const api = axios.create({
  baseURL: "https://localhost/5000",
});

api.interceptors.request.use(
  (config) => {
    const { token } = useSelector((state) => state.auth);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const dispatch = useDispatch();

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { accessToken } = dispatch(refreshToken);
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
    return Promise.reject(error);
  }
);
