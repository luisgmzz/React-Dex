import Capitalize from "../utils/capitalize";

type Props = {
  children: Type;
};

export default function PokemonType({ children }: Props) {
  return <li key={children}>{Capitalize(children)}</li>;
}
