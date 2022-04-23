import PokemonType from "./PokemonType";

type Props = {
  types: Type[];
};

export default function PokemonTypes({ types }: Props) {
  return (
    <ul>
      {types.map(type => {
        return <PokemonType>{type}</PokemonType>;
      })}
    </ul>
  );
}
