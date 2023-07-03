import { pokeApi } from "./baseApi";

export const getPokemonApi = () => {
  return pokeApi.get("/pokemon?limit=2000");
};

export const getPokemonByIdApi = (pokemonId) => {
  return pokeApi.get(`/pokemon/${pokemonId}`);
};
