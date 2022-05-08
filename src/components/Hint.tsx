import { MouseEvent, PropsWithChildren, useState } from "react";
import useBoolean from "../hooks/useBoolean";

type Props = {
  name: string;
};

export default function Hint({ name, children }: PropsWithChildren<Props>) {
  const { bool: visible, toggleBool: toggleVisibility } = useBoolean(false);

  return visible ? (
    <li>{children}</li>
  ) : (
    <li onClick={toggleVisibility}>{name}</li>
  );
}
