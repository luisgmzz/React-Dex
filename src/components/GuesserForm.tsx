import { ChangeEventHandler, MouseEventHandler } from "react";
import { StyledButton, StyledForm, StyledInput } from "../styles/PokemonForm";

type Props = {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

export default function GuesserForm({ handleChange, handleClick }: Props) {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Insert the name of the pokemon"
        onChange={handleChange}
      />
      <StyledButton onClick={handleClick}>Guess</StyledButton>
    </StyledForm>
  );
}
