import { ChangeEvent, useState } from "react";
import HintList from "../components/HintList";
import PokemonTypes from "../components/PokemonTypes";
import useGetRandomPokemon from "../hooks/useGetRandomPokemon";
import { StyledButton, StyledInput } from "../styles/PokemonForm";

export default function PokemonGuesser() {
  const [name, setName] = useState("");
  const pokemon = useGetRandomPokemon();

  const compareNames = () =>
    name.toLowerCase() === pokemon?.name
      ? alert("Acertaste")
      : alert("Fallaste");

  const updateName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
    console.log(pokemon?.name);
  };

  pokemon && console.log(pokemon.types);
  const hints = pokemon && [
    { name: "Primera letra", hint: pokemon.name[0] },
    {
      name: "Ultima letra",
      hint: pokemon.name[pokemon.name.length - 1]
    },
    {
      name: "Resto del nombre",
      hint: pokemon.name.slice(1, pokemon.name.length - 1)
    }
  ];

  return (
    pokemon && (
      <div>
        <StyledInput
          type="text"
          placeholder="Inserta el nombre del pokemon"
          onChange={updateName}
        />
        <StyledButton onClick={compareNames}>Click</StyledButton>
        <HintList hints={hints!} />
        <PokemonTypes types={pokemon.types} />
      </div>
    )
  );
}
