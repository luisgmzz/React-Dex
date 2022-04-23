import { ChangeEventHandler, MouseEventHandler } from "react";
import { StyledInput } from "../styles/PokemonForm";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function PokemonForm({ handleChange, handleClick }: Props) {
  return (
    <form>
      <StyledInput
        type="text"
        name="pokemon"
        placeholder="Introduce el nombre del pokemon que desees"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Buscar</button>
    </form>
  );
}
