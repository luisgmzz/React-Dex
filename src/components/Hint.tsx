import { MouseEvent, PropsWithChildren, useState } from "react";
import useBoolean from "../hooks/useBoolean";
import { StyledHint } from "../styles/Hints";

type Props = {
  name: string;
};

export default function Hint({ name, children }: PropsWithChildren<Props>) {
  const { bool: visible, toggleBool: toggleVisibility } = useBoolean(false);

  return visible ? (
    <StyledHint>{children}</StyledHint>
  ) : (
    <StyledHint onClick={toggleVisibility}>{name}</StyledHint>
  );
}
