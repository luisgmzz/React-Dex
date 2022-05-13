import { StyledName, StyledDiv } from "../styles/PokemonData";
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
        {pokemon.name.capitalize()}
      </StyledName>
      <PokemonImage images={pokemon.sprites} />
      <PokemonTypes types={pokemon.types} />
    </StyledDiv>
  );
}
