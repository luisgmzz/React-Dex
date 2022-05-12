import { StyledType, StyledTypesList } from "../styles/PokemonTypes";
import capitalize from "../utils/capitalize";

type Props = {
  types: Type[];
};

export default function PokemonTypes({ types }: Props) {
  return (
    <StyledTypesList>
      {types.map(type => {
        return <StyledType key={type}>{capitalize(type)}</StyledType>;
      })}
    </StyledTypesList>
  );
}
