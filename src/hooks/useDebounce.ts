import { useEffect, useState } from "react";

interface UseDebounce<T> {
  value: T
  delay: number
}

export const useDebounce = <T>({ value, delay }: UseDebounce<T>) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );
  return debouncedValue;
}
