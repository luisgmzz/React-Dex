export default function mapPokemon(pokemon: apiPokemon): Pokemon {
  const { name, types } = pokemon;
  const newTypes: Type[] = [];

  types.map(({ slot, type }) => (newTypes[slot - 1] = type.name as Type));
  return {
    name,
    types: newTypes,
    sprites: {
      front: pokemon.sprites.front_default,
      back: pokemon.sprites.back_default
    }
  };
}
