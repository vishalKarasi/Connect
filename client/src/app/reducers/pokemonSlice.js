import { getPokemonApi, getPokemonByIdApi } from "@app/api/pokemonApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  POKEMON: [],
  selectedPokemon: {},
  status: "",
  error: "",
};

export const getPokemon = createAsyncThunk(
  "getPokemon",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getPokemonApi();
      const pokemonData = data.results.slice(0, 5).map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return response.data;
      });
      const pokemon = await Promise.all(pokemonData);
      console.log(pokemon);
      return pokemon;
    } catch (error) {
      return rejectWithValue(`${error.message}: Error fetching pokemon data`);
    }
  }
);

export const getPokemonById = createAsyncThunk(
  "getPokemonById",
  async (pokemonId, { rejectWithValue }) => {
    try {
      const { data } = await getPokemonByIdApi(pokemonId);
      return data;
    } catch (error) {
      return rejectWithValue(
        `${error.message}: Error fetching pokemon ${data.name}`
      );
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // get pokemon
      .addCase(getPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.status = "success";
        state.POKEMON = action.payload;
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      })

      //get pokemon by id
      .addCase(getPokemonById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPokemonById.fulfilled, (state, action) => {
        state.status = "success";
        state.selectedPokemon = action.payload;
      })
      .addCase(getPokemonById.rejected, (state, action) => {
        state.status = "errpr";
        state.error = action.payload;
      });
  },
});

export default pokemonSlice.reducer;
