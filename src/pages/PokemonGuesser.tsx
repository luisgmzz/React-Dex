import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import AlreadyGuessedList from "../components/AlreadyGuessedList";
import GuesserForm from "../components/GuesserForm";
import HintList from "../components/HintList";
import PokemonTypes from "../components/PokemonTypes";
import useGetRandomPokemon from "../hooks/useGetRandomPokemon";
import { useList } from "../hooks/useList";
import { StyledDiv } from "../styles/PokemonData";
import { StyledWelcome } from "../styles/WelcomePage";

export default function PokemonGuesser() {
  const [name, setName] = useState("");
  const pokemon = useGetRandomPokemon();
  const { list, addItem } = useList<Guess>();

  const compareNames = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // name.toLowerCase() === pokemon?.name && alert("acertaste");
    addItem({ name, correct: name.capitalize() === pokemon?.name?.capitalize() });
  };

  const updateName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  };

  const hints = pokemon && [
    { name: "Debut Generation", hint: "" + pokemon.generation },
    {
      name: "First letter",
      hint: pokemon.name[0]
    },
    {
      name: "Rest of the name",
      hint: pokemon.name.slice(1)
    }
  ];

  return pokemon ? (
    <StyledDiv>
      <GuesserForm handleChange={updateName} handleClick={compareNames} />
      <PokemonTypes types={pokemon.types} />
      <HintList hints={hints!} />
      <AlreadyGuessedList list={list.toReversed()} />
    </StyledDiv>
  ) : (
    <StyledWelcome>
      Loading...
    </StyledWelcome>
  );
}
