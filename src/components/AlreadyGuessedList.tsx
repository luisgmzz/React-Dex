type Props = {
  list: string[];
};

export default function AlreadyGuessedList({ list }: Props) {
  return (
    <ul>
      {list.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
}
