import React, { useEffect } from "react";

export const cx = (...classes: Array<string | undefined | false | null>) => {
  return Array.from(classes)
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ") // remove extra whitespace
    .trim();
};

export const useDebouncedEffect = (
  effect: () => void,
  deps: React.DependencyList = [],
  delayMs = 500
) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      effect();
    }, delayMs);

    return () => {
      clearTimeout(handler);
    };
  }, [effect, delayMs, ...deps]);
};

export const useRequestAnimationFrame = (
  callback: (delta?: number, total?: number) => void,
  deps?: React.DependencyList
) => {
  const requestRef = React.useRef<number>();
  const previousTimeRef = React.useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime, previousTimeRef.current);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, deps ?? []); // Make sure the effect runs only once

  return requestRef;
};
