import { StyledTypesList } from "../styles/PokemonTypes";
import PokemonType from "./PokemonType";

type Props = {
  types: Type[];
};

export default function PokemonTypes({ types }: Props) {
  return (
    <StyledTypesList>
      {types.map(type => {
        return <PokemonType key={type}>{type}</PokemonType>;
      })}
    </StyledTypesList>
  );
}
