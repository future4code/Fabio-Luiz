import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard(props) {
  const [pokemon, setpokemon] = useState({});

  useEffect(() => {
    pegapokemon(props.pokemon);
  }, []);

  useEffect(() => {
    pegapokemon(props.pokemon);
  }, [pokemon]);

  const pegapokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setpokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
