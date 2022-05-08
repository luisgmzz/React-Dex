import { useState } from "react";

export default function useBoolean(initialState: boolean) {
  const [bool, setBool] = useState(initialState);

  const toggleBool = () => {
    setBool(prevBool => !prevBool);
  };

  return { bool, toggleBool };
}
