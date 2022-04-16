import { ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function PokemonForm({ handleChange, handleClick }: Props) {
  return (
    <form>
      <input
        type="text"
        name="pokemon"
        placeholder="Introduce el nombre del pokemon que desees"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Buscar</button>
    </form>
  );
}
