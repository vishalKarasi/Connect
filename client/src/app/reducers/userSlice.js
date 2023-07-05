import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  USER: [],
  status: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
