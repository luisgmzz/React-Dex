import PokemonData from "../components/PokemonData";
import PokemonForm from "../components/PokemonForm";
import { useSearchPokemon } from "../hooks/useSearchPokemon";

export default function PokemonFinder() {
  const { pokemon, searchPokemon, updateName } = useSearchPokemon();
  return (
    <>
      <PokemonForm handleChange={updateName} handleClick={searchPokemon} />
      {pokemon && <PokemonData pokemon={pokemon} />}
    </>
  );
}
