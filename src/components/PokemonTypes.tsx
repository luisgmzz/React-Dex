import { StyledType, StyledTypesList } from "../styles/PokemonTypes";
import Capitalize from "../utils/capitalize";

type Props = {
  types: Type[];
};

export default function PokemonTypes({ types }: Props) {
  return (
    <StyledTypesList>
      {types.map(type => {
        return <StyledType key={type}>{Capitalize(type)}</StyledType>;
      })}
    </StyledTypesList>
  );
}
