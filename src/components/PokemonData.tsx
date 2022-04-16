import Capitalize from "../utils/capitalize";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonData({ pokemon }: Props) {
  return (
    <div>
      <h3>{Capitalize(pokemon.name)}</h3>
      <img src={pokemon.sprite} alt={`Sprite de ${pokemon.name}`} />
      <ul>
        {pokemon.types.map(type => {
          return <li>{Capitalize(type)}</li>;
        })}
      </ul>
    </div>
  );
}
