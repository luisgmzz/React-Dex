import { ChangeEventHandler, MouseEventHandler } from "react";
import { StyledButton, StyledForm, StyledInput } from "../styles/PokemonForm";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function PokemonForm({ handleChange, handleClick }: Props) {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        name="pokemon"
        placeholder="Introduce el nombre del pokemon que desees"
        onChange={handleChange}
      />
      <StyledButton onClick={handleClick}>Buscar</StyledButton>
    </StyledForm>
  );
}
