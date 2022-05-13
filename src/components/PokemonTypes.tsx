import { StyledType, StyledTypesList } from "../styles/PokemonTypes";

type Props = {
  types: Type[];
};

export default function PokemonTypes({ types }: Props) {
  return (
    <StyledTypesList>
      {types.map(type => {
        return <StyledType key={type}>{type.capitalize()}</StyledType>;
      })}
    </StyledTypesList>
  );
}
