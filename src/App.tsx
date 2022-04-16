import PokemonData from "./components/PokemonData";
import PokemonForm from "./components/PokemonForm";
import { usePokemon } from "./hooks/usePokemon";

function App() {
  const { pokemon, searchPokemon, updateName } = usePokemon();

  return (
    <div className="App">
      <PokemonForm handleChange={updateName} handleClick={searchPokemon} />
      {pokemon && <PokemonData pokemon={pokemon} />}
    </div>
  );
}

export default App;
