import { Button, Input } from "@parssa/universal-ui";
import { ExperimentWrapper } from "components/ExperimentWrapper";
import { WIPCallout } from "components/WIPCallout";
import React, { useEffect, useMemo, useState } from "react";
import { cx, lerp, useDimensions, useRequestAnimationFrame } from "utils";

const DEBUG = false;

const useCanvasContext = (
  callback?: (ctx: CanvasRenderingContext2D) => void,
  deps?: React.DependencyList
) => {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    // scaleCanvas(canvas, canvas.getContext("2d")!, canvas.width, canvas.height);

    const ctx = canvas.getContext("2d");

    if (ctx) {
      callback?.(ctx);
      ctxRef.current = ctx;
    }
  }, [callback, ...(deps ?? [])]);

  return [ref, ctxRef] as const;
};

const fastDistance = (x1: number, y1: number, x2: number, y2: number) => {
  return (x1 - x2) ** 2 + (y1 - y2) ** 2;
};

export const StargazingContainer = ({
  count = 100,
  speed = 0.005,
  as = "div",
  backgroundClasses,
  ...props
}: DivProps & {
  as?: string;
  backgroundClasses?: string;
  count?: number;
  speed?: number;
}) => {
  const [ref, ctxRef] = useCanvasContext();
  const parentRef = React.useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(parentRef);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const relativeMousePos = useMemo(() => {
    if (!dimensions) return { x: 0, y: 0 };
    const { width, height } = dimensions;
    const { x, y } = mousePos;

    const relativeX = x / width;
    const relativeY = y / height;

    return { x: relativeX, y: relativeY };
  }, [dimensions, mousePos]);

  const generateColorFromIndex = (i: number) => {
    return `hsl(${i * 2}, 100%, 50%)`;
  };

  const generateVectorMap = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const x = Math.random();
      const y = Math.random();

      const normalizedX = x * 2 - 1;
      const normalizedY = y * 2 - 1;

      const dist = Math.sqrt(normalizedX ** 2 + normalizedY ** 2);

      const normalizedX2 = normalizedX / dist;
      const normalizedY2 = normalizedY / dist;

      return [normalizedX2, normalizedY2];
    });
  };

  const generateOpacityMap = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      return Math.random() * 0.5 + 0.01;
    });
  };

  const generateItems = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = DEBUG ? 10 : Math.random() * 1.4;
      const x = Math.random(),
        y = Math.random();
      const color = DEBUG ? generateColorFromIndex(i) : Math.random() > 0.5 ? "white" : "#FFD783";
      const opacity = Math.random() * 0.5 + 0.2;
      return { size, x, y, color, opacity };
    });
  };

  const [items, setItems] = useState(generateItems(count));

  useEffect(() => {
    if (items.length === count) return;

    if (items.length < count) {
      const newItems = generateItems(count - items.length);
      setItems((prev) => [...prev, ...newItems]);
    } else {
      setItems((prev) => prev.slice(0, count));
    }
  }, [count]);

  const vectorMap = useMemo(() => generateVectorMap(1000), []);
  const opacityMap = useMemo(() => generateOpacityMap(1000), [count]);

  const [paused, setPaused] = useState(false);

  useRequestAnimationFrame(
    (delta) => {
      if (paused) return;

      setItems((prev) => {
        const next = prev.map(({ size, x, y, color, opacity }, i) => {
          const [vx, vy] = vectorMap[Math.min(i, i % (vectorMap.length - 1))];

          let distanceFromMouse = 0;
          if (relativeMousePos.x !== 0 && relativeMousePos.y !== 0 && i % 2 === 0) {
            distanceFromMouse = fastDistance(x, y, relativeMousePos.x, relativeMousePos.y);
          }

          let newX = x + vx * speed * (distanceFromMouse > 0.01 ? 0.1 : 1.2);
          let newY = y + vy * speed * (distanceFromMouse > 0.01 ? 0.1 : 1.2);

          newX = lerp(x, newX, delta * 0.001);
          newY = lerp(y, newY, delta * 0.001);

          if (newX > 1) {
            newX = 0;
          } else if (newX < 0) {
            newX = 1;
          }

          if (newY > 1) {
            newY = 0;
          } else if (newY < 0) {
            newY = 1;
          }

          const nearMouse = distanceFromMouse < 0.01 && distanceFromMouse > 0;

          const CHANGE_SPEED = 0.5;
          const UN_CHANGE_SPEED = 0.01;

          const newSize = nearMouse
            ? Math.min(size + CHANGE_SPEED, 1.2)
            : Math.max(size - UN_CHANGE_SPEED, 0.5);
          const newOpacity = nearMouse
            ? Math.min(opacity + CHANGE_SPEED, 1)
            : Math.max(opacity - UN_CHANGE_SPEED, opacityMap[i % (opacityMap.length - 1)] ?? 0.2);

          return {
            size: newSize,
            x: newX,
            y: newY,
            color,
            opacity: newOpacity
          };
        });
        return next;
      });
    },
    [paused, speed, relativeMousePos]
  );

  useEffect(() => {
    if (!ctxRef.current) return;
    const ctx = ctxRef.current;

    // set dimensions
    const w = dimensions?.width ?? 0;
    const h = dimensions?.height ?? 0;

    // clear canvas
    ctx.clearRect(0, 0, w, h);

    const draw = () => {
      const w = dimensions?.width ?? 0;
      const h = dimensions?.height ?? 0;
      // ctx.clearRect(0, 0, w, h);
      items.forEach(({ size, x, y, color, opacity }, i) => {
        ctx.beginPath();
        ctx.arc(x * w, y * h, size, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.globalAlpha =
          opacity +
          (i % 7 === 0 || i % 3 === 0 ? (Math.random() * Math.random() > 0.5 ? 1 : -1) : 0);
        ctx.fill();
        // write the coords
        if (DEBUG) {
          ctx.font = "10px Arial";
          ctx.fillStyle = "white";
          ctx.fillText(`${x.toFixed(2)}, ${y.toFixed(2)}`, x * w, y * h);
        }
      });
    };

    draw();
    return () => {};
  }, [items, dimensions]);

  return React.createElement(as, {
    ...props,
    "data-dark": "true",
    "data-override": "true",
    "data-theme": "neutral",
    className: cx("bg- overflow-hidden relative", props.className),
    children: (
      <>
        <div ref={parentRef} className={cx("absolute inset-0", backgroundClasses)}>
          <div className="absolute inset-0 bg-[linear-gradient(14deg,#1B0D35_0%,#0B132D_100%)] dark:bg-[linear-gradient(14deg,#0F071E_0%,#000000_100%)]" />
          {/* <div className="absolute inset-0 bg-[linear-gradient(14deg,#FFBC79_0%,#FFD3A6%)] dark:bg-[linear-gradient(14deg,#0F071E_0%,#000000_100%)]" /> */}

          <canvas
            ref={ref}
            className="relative scale-105 touch-none"
            width={dimensions?.width ?? 0}
            height={dimensions?.height ?? 0}
            onMouseMove={(e) => {
              const { left, top } = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - left;
              const y = e.clientY - top;
              setMousePos({ x, y });
            }}
            onTouchMove={(e) => {
              const { left, top } = e.currentTarget.getBoundingClientRect();
              const x = e.touches[0].clientX - left;
              const y = e.touches[0].clientY - top;
              setMousePos({ x, y });
            }}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            onTouchEnd={() => setMousePos({ x: 0, y: 0 })}
          />
        </div>
        <div className="relative text-center">
          {props.children}
          {mousePos && DEBUG && (
            <div className="absolute top-0 left-0 text-white">
              {relativeMousePos.x.toFixed(2)}, {relativeMousePos.y.toFixed(2)}
            </div>
          )}
          {DEBUG && (
            <Button size="sm" onClick={() => setPaused((p) => !p)}>
              {paused ? "play" : "pause"}
            </Button>
          )}
        </div>
      </>
    )
  });
};

export default () => {
  const [count, setCount] = useState(400);
  const [speed, setSpeed] = useState(0.005);

  const [toggle, setToggle] = useState<"canvas" | "pixi" | "both">("canvas");
  return (
    <ExperimentWrapper description="stars in the sky">
      <WIPCallout className="mb-4">still gotta add shooting stars + polish {"☺︎"}</WIPCallout>
      <StargazingContainer
        count={count}
        speed={speed}
        className="h-96 grid border border-theme-base/50 place-items-center rounded-xl"
      ></StargazingContainer>

      <div className="grid gap-y-2 mt-size-4y">
        <Input
          type="range"
          min={0}
          max={5000}
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <Input
          type="range"
          min={0}
          step={0.0001}
          max={0.1}
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>
    </ExperimentWrapper>
  );
};
