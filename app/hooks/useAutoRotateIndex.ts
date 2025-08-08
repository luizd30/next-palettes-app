import { useEffect, useRef, useState } from "react";

export function useAutoRotatingIndex(length: number, delay: number = 3000) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const increment = (delta: number) => {
    setIndex((prev) => (prev + delta + length) % length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      increment(1);
    }, delay);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [delay, length]);

  return { index, setIndex, increment };
}
