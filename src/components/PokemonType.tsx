import Capitalize from "../utils/capitalize";
import { StyledType } from "../styles/PokemonTypes";

type Props = {
  children: Type;
};

export default function PokemonType({ children }: Props) {
  return <StyledType>{Capitalize(children)}</StyledType>;
}
