import { StyledType, StyledTypesList } from "../styles/PokemonTypes";
import capitalize from "../utils/capitalize";

type Props = {
  types: Type[];
};

export default function PokemonTypes({ types }: Props) {
  console.log(typeof types[0]);
  return (
    <StyledTypesList>
      {types.map(type => {
        return <StyledType key={type}>{capitalize(type)}</StyledType>;
      })}
    </StyledTypesList>
  );
}
