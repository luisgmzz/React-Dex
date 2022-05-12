import {
  StyledGuessedLi,
  StyledGuessedList
} from "../styles/AlreadyGuessedList";

type Props = {
  list: Guess[];
};

export default function AlreadyGuessedList({ list }: Props) {
  return (
    <StyledGuessedList>
      {list.map(({ name, correct }, index) => (
        <StyledGuessedLi correct={correct} key={index}>
          {name}
        </StyledGuessedLi>
      ))}
    </StyledGuessedList>
  );
}
