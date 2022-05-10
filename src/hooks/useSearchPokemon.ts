import { ChangeEvent, MouseEvent, useState } from "react";
import getPokemon from "../services/getPokemon";
import mapPokemon from "../utils/mapPokemon";

export function useSearchPokemon() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonName, setPokemonName] = useState("");

  const updateName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(target.value);
  };

  const searchPokemon = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getPokemon(pokemonName)
      .then(setPokemon)
      .catch(() =>
        setPokemon({
          id: 0,
          name: "MissingNo.",
          types: ["bird"],
          sprites: {
            front:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MissingNo.png/256px-MissingNo.png",
            back: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MissingNo.png/256px-MissingNo.png"
          },
          generation: 0
        })
      );
  };

  return {
    pokemon,
    searchPokemon,
    updateName
  };
}
