import axios from "axios";
import mapPokemon from "../utils/mapPokemon";

export default async function getPokemon(pokemonNameOrId: string) {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`)
    .then(({ data }) => mapPokemon(data));
}
