import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  POST: [],
  status: "",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default postSlice.reducer;
