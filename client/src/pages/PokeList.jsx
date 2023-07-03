import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon, getPokemonById } from "@app/reducers/pokemonSlice";

function PokeList() {
  const dispatch = useDispatch();
  const { POKEMON, status, error } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon());
  }, [dispatch]);

  return (
    <main>
      <h1>PokeList</h1>
      <div>This is PokeList page</div>
    </main>
  );
}

export default PokeList;
