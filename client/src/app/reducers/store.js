import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    user: userSlice,
    post: postSlice,
  },
});

export default store;
