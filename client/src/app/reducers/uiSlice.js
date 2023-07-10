import { createSlice } from "@reduxjs/toolkit";

export const getInitialMode = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const initialState = {
  mode: getInitialMode(),
  visible: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      document.documentElement.style.colorScheme = state.mode;
      document.body.className = state.mode;
    },

    toggleVisibility(state) {
      state.visible = !state.visible;
    },
  },
});

export const { toggleMode, toggleVisibility } = uiSlice.actions;
export default uiSlice.reducer;
