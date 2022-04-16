import { ChangeEvent, MouseEvent, useState } from "react";
import getPokemon from "../services/getPokemon";
import mapPokemon from "../utils/mapPokemon";

export function usePokemon() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonName, setPokemonName] = useState("");

  const updateName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(target.value);
  };

  const searchPokemon = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getPokemon(pokemonName).then(({ data }) => setPokemon(mapPokemon(data)));
  };

  return {
    pokemon,
    searchPokemon,
    updateName
  };
}
