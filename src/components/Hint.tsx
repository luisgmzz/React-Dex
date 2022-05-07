import { MouseEvent, PropsWithChildren, useState } from "react";

type Props = {
  order: number;
};

export default function Hint({ order, children }: PropsWithChildren<Props>) {
  const [visible, setVisible] = useState(false);
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setVisible(prevVisible => !prevVisible);
  };
  return visible ? (
    <li>{children}</li>
  ) : (
    <li onClick={handleClick}>Hint {order + 1}</li>
  );
}
