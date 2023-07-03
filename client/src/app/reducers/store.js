import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import pokemonSlice from "./pokemonSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    pokemon: pokemonSlice,
  },
});
