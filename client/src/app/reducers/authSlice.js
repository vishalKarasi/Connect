import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, refreshTokenApi, registerApi } from "@app/api/authApi";

const initialState = {
  USER: null,
  accessToken: null,
  message: "",
  status: "idle",
  isRegister: false,
};

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    const { data } = await registerApi(user);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk("auth/login", async (user) => {
  try {
    const { data } = await loginApi(user);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
});

export const refreshToken = createAsyncThunk("auth/refreshToken", async () => {
  try {
    const { data } = await refreshTokenApi();
    return data;
  } catch (error) {
    throw error;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.USER = null;
      state.accessToken = null;
      state.message = "";
      state.status = "idle";
      state.isRegister = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "success";
        state.message = action.payload.message;
        state.isRegister = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload.message;
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.USER = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload.message;
      })
      .addCase(refreshToken.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.status = "success";
        state.accessToken = action.payload.accessToken;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload.message;
      });
  },
});

export default authSlice.reducer;
