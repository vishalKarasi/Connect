import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, refreshTokenApi, registerApi } from "@app/api/authApi";

const initialState = {
  isRegister: false,
  userId: null,
  accessToken: null,
  message: "",
  status: "idle",
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
    toggleForm: (state) => {
      state.isRegister = !state.isRegister;
    },

    logOut: (state) => {
      state.isRegister = false;
      state.accessToken = null;
      state.message = "";
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.isRegister = true;
        state.message = payload.message;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.status = "error";
        state.message = payload.message;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.userId = payload.userId;
        state.accessToken = payload.accessToken;
        state.message = payload.message;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = "error";
        state.message = payload.message;
      })
      .addCase(refreshToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.status = "success";
        state.accessToken = payload.accessToken;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.status = "error";
        state.message = payload.message;
      });
  },
});

export const { toggleForm, logout } = authSlice.actions;
export default authSlice.reducer;
