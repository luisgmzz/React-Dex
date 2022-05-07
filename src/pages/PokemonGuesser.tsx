import { ChangeEvent, useState } from "react";
import Hint from "../components/Hint";
import HintList from "../components/HintList";
import useGetRandomPokemon from "../hooks/useGetRandomPokemon";
import { StyledButton, StyledInput } from "../styles/PokemonForm";

export default function PokemonGuesser() {
  const [name, setName] = useState("");
  const pokemon = useGetRandomPokemon();

  const compareNames = () =>
    name === pokemon?.name ? alert("Acertaste") : alert("Fallaste");

  const updateName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
    console.log(pokemon?.name);
  };

  return (
    pokemon && (
      <div>
        <StyledInput
          type="text"
          placeholder="Inserta el nombre del pokemon"
          onChange={updateName}
        />
        <StyledButton onClick={compareNames}>Click</StyledButton>
        <HintList
          hints={[
            pokemon.name[0],
            pokemon.name[pokemon.name.length - 1],
            pokemon.name.slice(1, pokemon.name.length - 1)
          ]}
        />
      </div>
    )
  );
}
