import PokemonData from "../components/PokemonData";
import PokemonForm from "../components/PokemonForm";
import { usePokemon } from "../hooks/usePokemon";

export default function PokemonFinder() {
  const { pokemon, searchPokemon, updateName } = usePokemon();
  return (
    <>
      <PokemonForm handleChange={updateName} handleClick={searchPokemon} />
      {pokemon && <PokemonData pokemon={pokemon} />};
    </>
  );
}
