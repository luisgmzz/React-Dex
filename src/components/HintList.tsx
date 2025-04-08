import { StyledHintsList } from "../styles/Hints";
import Hint from "./Hint";

type Props = {
  hints: {
    name: string;
    hint: string;
  }[];
};

export default function HintList({ hints }: Props) {
  return (
    <StyledHintsList>
      {hints.map(({ name, hint }, index) => (
        <Hint key={index} name={name}>
          {hint}
        </Hint>
      ))}
    </StyledHintsList>
  );
}
