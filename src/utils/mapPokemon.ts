export default function mapPokemon(pokemon: apiPokemon): Pokemon {
  const { name, types } = pokemon;
  const newTypes: Type[] = [];

  types.map(({ slot, type }) => (newTypes[slot - 1] = type.name as Type));
  return {
    name,
    types: newTypes,
    sprite: pokemon.sprites.front_default
  };
}
