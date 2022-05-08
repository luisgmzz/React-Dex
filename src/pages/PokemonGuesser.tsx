import { ChangeEvent, MouseEvent, useState } from "react";
import GuesserForm from "../components/GuesserForm";
import HintList from "../components/HintList";
import PokemonTypes from "../components/PokemonTypes";
import useGetRandomPokemon from "../hooks/useGetRandomPokemon";
import { StyledDiv } from "../styles/PokemonData";

export default function PokemonGuesser() {
  const [name, setName] = useState("");
  const pokemon = useGetRandomPokemon();

  const compareNames = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    name.toLowerCase() === pokemon?.name
      ? alert("Acertaste")
      : alert("Fallaste");
  };
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

  return pokemon ? (
    <StyledDiv>
      <GuesserForm handleChange={updateName} handleClick={compareNames} />
      <PokemonTypes types={pokemon.types} />
      <HintList hints={hints!} />
    </StyledDiv>
  ) : (
    <StyledDiv>Loading...</StyledDiv>
  );
}
