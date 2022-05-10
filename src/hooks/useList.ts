import { useEffect, useState } from "react";

export function useList<T>(initialList?: T[]) {
  const [list, setList] = useState<T[]>(initialList || []);

  useEffect(() => {
    setList(initialList || []);
  }, [initialList]);

  const addItem = (value: T) => {
    if (value) setList(prevList => prevList.concat(value));
  };

  return { list, addItem };
}
