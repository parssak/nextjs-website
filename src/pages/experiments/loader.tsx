import { Input, Text } from "@parssa/universal-ui";
import { ExternalLink } from "components/ExternalLink";
import React, { useMemo, useState } from "react";
import { useRequestAnimationFrame } from "utils";

type DivProps = React.HTMLAttributes<HTMLDivElement>;


export default ({ ...props }: DivProps & {}) => {
  const [amplitude, setAmplitude] = useState(0);
  const [speed, setSpeed] = useState(0.06);
  const [steps, setSteps] = useState(7);
  const BOUND = 45;
  const dir = React.useRef(1);

  useRequestAnimationFrame(
    (delta) => {
      setAmplitude((a) => {
        dir.current = Math.abs(a) > BOUND ? -dir.current : dir.current;
        return a + dir.current * speed * delta;
      });
    },
    [speed]
  );


  const abs = Math.abs(amplitude);
  const percentAmplitude = abs / BOUND;
  const stepsArray = useMemo(() => [...Array(steps)], [steps]);

  return (
    <div {...props} className="container pt-24">
      <Text className="font-medium mb-size-8y">/experiments/spinner</Text>
      <Text>
        rotating loading animation — inspired by{" "}
        <ExternalLink
          imageHref="/preview/morten-loader.png"
          href="https://twitter.com/mortenjust/status/1614917179907923970"
        >
          @mortenjust
        </ExternalLink>
      </Text>
      <div className="mt-size-4y">
        <div className="grid sm:grid-cols-2 gap-x-2 gap-y-2 sm:max-w-[12rem]">
          <Text>Speed</Text>
          <Input
            type="number"
            value={speed}
            step={0.001}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="mb-4 sm:mb-0"
          />
          <Text>Steps</Text>
          <Input
            type="number"
            value={steps}
            step={1}
            onChange={(e) => setSteps(Number(e.target.value))}
            className="mb-4 sm:mb-0"
          />
        </div>
      </div>
      <div className="grid w-full place-items-center h-96 relative">
        {stepsArray.map((_, i) => {
          return (
            <div
              key={i}
              data-theme="warning"
              className={`w-96 h-96 will-change-transform 
              absolute border border-theme-active/20`}
              style={{
                borderRadius: `${abs * (1 + i)}%`,
                transform: `rotate(${amplitude * (i + 1)}deg) scale(${1 - (i * 1.3) / steps})`,
                opacity: (i + 1) / steps,
                backgroundColor: `hsl(${(percentAmplitude * 20 + 180) % 360} 100% 50%)`
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
