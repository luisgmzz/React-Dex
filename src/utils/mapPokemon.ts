import getGeneration from "./getGeneration";

export default function mapPokemon({
  name,
  types,
  sprites,
  id
}: apiPokemon): Pokemon {
  const newTypes: Type[] = types.map(({ type }) => type.name as Type);
  return {
    id,
    name,
    types: newTypes,
    sprites: {
      front: sprites.front_default,
      back: sprites.back_default
    },
    generation: getGeneration(id)
  };
}
