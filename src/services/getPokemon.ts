import axios from "axios";

export default async function getPokemon(pokemonName: string) {
  return await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
  );
}
