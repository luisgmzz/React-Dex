import { ChangeEvent, useState } from "react";
import useGetRandomPokemon from "../hooks/useGetRandomPokemon";
import { StyledButton, StyledInput } from "../styles/PokemonForm";

export default function PokemonGuesser() {
  const [name, setName] = useState("");
  const pokemon = useGetRandomPokemon();

  const compareNames = () => {
    if (name === pokemon?.name) {
      return alert("Acertaste");
    }
    return alert("Fallaste");
  };

  const updateName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
    console.log(pokemon?.name);
  };

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="Inserta el nombre del pokemon"
        onChange={updateName}
      />
      <StyledButton onClick={compareNames}>Click</StyledButton>
    </div>
  );
}
