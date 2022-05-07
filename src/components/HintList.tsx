import Hint from "./Hint";

type Props = {
  hints: string[];
};

export default function HintList({ hints }: Props) {
  return (
    <ul>
      {hints.map((child, index) => (
        <Hint order={index}>{child}</Hint>
      ))}
    </ul>
  );
}
