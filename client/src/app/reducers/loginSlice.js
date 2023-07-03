import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  token: "",
  status: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default loginSlice.reducer;
