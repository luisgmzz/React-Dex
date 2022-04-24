import { StyledName, StyledImage, StyledDiv } from "../styles/PokemonData";
import Capitalize from "../utils/capitalize";
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
        {Capitalize(pokemon.name)}
      </StyledName>
      <PokemonImage images={pokemon.sprites} />
      {/*  <StyledImage src={pokemon.sprite} alt={`Sprite de ${pokemon.name}`} /> */}
      <PokemonTypes types={pokemon.types} />
    </StyledDiv>
  );
}
