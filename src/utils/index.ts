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

  // Make sure when you focus on the window, the animation continues
  useEffect(() => {
    window.addEventListener("focus", () => {
      console.debug("focus")
      requestRef.current = requestAnimationFrame(animate);
    });

    return () => window.removeEventListener("focus", () => {
      console.debug("blur")
      cancelAnimationFrame(requestRef.current!);
    });
    
  }, [animate, requestRef]);


  return requestRef;
};

export const lerpColor = (a: string, b: string, amount: number) => {
  var ah = parseInt(a.replace(/#/g, ""), 16),
    ar = ah >> 16,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff,
    bh = parseInt(b.replace(/#/g, ""), 16),
    br = bh >> 16,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);

  return "#" + (((1 << 24) + (rr << 16) + (rg << 8) + rb) | 0).toString(16).slice(1);
};

export const lerp = (a: number, b: number, amount: number) => {
  return a + amount * (b - a);
};

export const useKeyDown = (callback: (event: KeyboardEvent) => void, deps?: React.DependencyList) => {
  useEffect(() => {
    window.addEventListener("keydown", callback);
    return () => window.removeEventListener("keydown", callback);
  }, [callback, ...deps ?? []]);
}
  