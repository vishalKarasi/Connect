import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "@app/reducers/authSlice";

const BASE_URL = "http://localhost:5000";

export const publicApi = axios.create({
  baseURL: BASE_URL,
});

export const privateApi = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

const reqInterceptor = privateApi.interceptors.request.use(
  (config) => {
    const { accessToken } = useSelector((state) => state.auth);
    console.log(accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const resInterceptor = privateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const dispatch = useDispatch();

    if (error?.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        dispatch(refreshToken());
        const { accessToken } = useSelector((state) => state.auth);
        console.log(accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return privateApi(originalRequest);
      } catch (error) {
        console.log(error.message);
      }
    }
    return Promise.reject(error);
  }
);

privateApi.interceptors.request.eject(reqInterceptor);
privateApi.interceptors.request.eject(resInterceptor);

export default privateApi;
