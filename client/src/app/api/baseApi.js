import axios from "axios";

export const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const serverApi = axios.create({
  baseURL: "http://localhost:5000",
});
