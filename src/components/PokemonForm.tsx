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
        placeholder="Insert the name or id of the pokemon"
        onChange={handleChange}
      />
      <StyledButton onClick={handleClick}>Find</StyledButton>
    </StyledForm>
  );
}
