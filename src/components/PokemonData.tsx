import { PokemonName, PokemonSprite } from "../styles/PokemonData";
import Capitalize from "../utils/capitalize";
import typeColors from "../constants/typeColors.json";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonData({ pokemon }: Props) {
  return (
    <div>
      <PokemonName color={typeColors[pokemon.types[0]]}>
        {Capitalize(pokemon.name)}
      </PokemonName>
      <PokemonSprite src={pokemon.sprite} alt={`Sprite de ${pokemon.name}`} />
      <ul>
        {pokemon.types.map(type => {
          return <li key={type}>{Capitalize(type)}</li>;
        })}
      </ul>
    </div>
  );
}
