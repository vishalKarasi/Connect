import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, refreshTokenApi, registerApi } from "@app/api/authApi";

const initialState = {
  USER: null,
  token: null,
  message: "",
  status: "idle",
  isSignUp: false,
};

export const register = createAsyncThunk(
  "register",
  async (user, { rejectWithValue }) => {
    try {
      console.log(user);
      const { data } = registerApi(user);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(`${error}: Error during singup`);
    }
  }
);

export const login = createAsyncThunk(
  "login",
  async (user, { rejectWithValue }) => {
    try {
      console.log(user);
      const { data } = loginApi(user);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(`${error}: Error during singin`);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "refreshToken",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = refreshTokenApi(user);
      return data;
    } catch (error) {
      rejectWithValue(`${error}: Error during refreshing token`);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.USER = null;
      state.token = null;
      state.message = "";
      state.status = "idle";
      state.isSignUp = false;
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
        state.isSignUp = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload.message;
      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.USER = action.payload.user;
        state.token = action.payload.token;
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
        state.token = action.payload.token;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.status = "error";
        state.message = action.payload.message;
      });
  },
});

export default authSlice.reducer;
