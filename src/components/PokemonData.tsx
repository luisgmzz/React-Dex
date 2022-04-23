import { PokemonName, PokemonSprite } from "../styles/PokemonData";
import Capitalize from "../utils/capitalize";
import typeColors from "../constants/typeColors.json";
import PokemonTypes from "./PokemonTypes";

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
      <PokemonTypes types={pokemon.types} />
    </div>
  );
}
