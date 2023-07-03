import React from "react";

const PokeCard = ({ pokemon }) => {
  const { name, sprites, types } = pokemon;

  return (
    <div className="pokeCard">
      <button>Favorite</button>
      <button>Compare</button>
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
      <div className="types">
        {types.map((type) => (
          <span key={type.slot}>{type.type.name}</span>
        ))}
      </div>
    </div>
  );
};

export default PokeCard;
