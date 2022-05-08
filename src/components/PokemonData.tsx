import { StyledName, StyledDiv } from "../styles/PokemonData";
import capitalize from "../utils/capitalize";
import typeColors from "../constants/typeColors";
import PokemonTypes from "./PokemonTypes";
import PokemonImage from "./PokemonImage";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonData({ pokemon }: Props) {
  return (
    <StyledDiv>
      <StyledName color={typeColors[pokemon.types[0]]}>
        {capitalize(pokemon.name)}
      </StyledName>
      <PokemonImage images={pokemon.sprites} />
      <PokemonTypes types={pokemon.types} />
    </StyledDiv>
  );
}
