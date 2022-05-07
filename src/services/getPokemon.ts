import axios from "axios";

export default async function getPokemon(pokemonNameOrId: string) {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`)
    .then(res => res.data);
}
