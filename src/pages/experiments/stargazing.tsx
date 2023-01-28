import { Text } from "@parssa/universal-ui";
import { ExperimentWrapper } from "components/ExperimentWrapper";
import React, { useEffect, useMemo } from "react";
import { cx } from "utils";

export const StargazingContainer = ({
  as = "div",
  backgroundClasses,
  ...props
}: DivProps & {
  as?: string;
  backgroundClasses?: string;
}) => {
  const ref = React.useRef<HTMLCanvasElement>(null);

  const items: {
    size: number;
    x: number;
    y: number;
    color: string;
    opacity: number;
  }[] = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => {
      const size = Math.random() * 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const color = Math.random() > 0.5 ? "white" : "#FFD783";
      const opacity = Math.random() * 0.5;
      return { size, x, y, color, opacity };
    });
  }, []);

  return React.createElement(as, {
    ...props,
    "data-dark": "true",
    "data-override": "true",
    "data-theme": "neutral",
    className: cx("bg-black overflow-hidden relative", props.className),
    children: (
      <>
        <div className={cx("absolute inset-0", backgroundClasses)}>
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(14deg, #0F071E 0%, #000000 100%)"
            }}
          />
          {items.map(({ size, x, y, color, opacity }, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                left: `${x}%`,
                top: `${y}%`,
                opacity
              }}
            />
          ))}
          <canvas ref={ref}  />
        </div>
        <div className="relative">{props.children}</div>
      </>
    )
  });
};

export default () => {
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <ExperimentWrapper description="stars in the sky">
      <StargazingContainer className="h-96 grid border border-theme-base/50 place-items-center rounded-xl">
        <Text>starry nights</Text>
      </StargazingContainer>
    </ExperimentWrapper>
  );
};
