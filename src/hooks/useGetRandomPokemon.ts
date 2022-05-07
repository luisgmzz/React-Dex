import { useEffect, useState } from "react";
import getPokemon from "../services/getPokemon";
import {
  getRandomNumber,
  getRandomNumberFromRanges
} from "../utils/getRandomNumber";

export default function useGetRandomPokemon(gens?: number[]) {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const randomNumber = gens
    ? getRandomNumberFromRanges(gens)
    : getRandomNumber(802);

  useEffect(() => {
    getPokemon("" + randomNumber).then(setPokemon);
  }, []);

  return pokemon;
}
