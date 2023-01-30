import { Input, Text } from "@parssa/universal-ui";
import { ExperimentWrapper } from "components/ExperimentWrapper";
import { ExternalLink } from "components/ExternalLink";
import React, { useMemo, useState } from "react";
import { useRequestAnimationFrame } from "utils";

export const Loader = ({ steps = 7, speed = 0.04 }: { steps?: number; speed?: number }) => {
  const [amplitude, setAmplitude] = useState(0);
  const BOUND = 45;
  const dir = React.useRef(1);

  useRequestAnimationFrame(
    (delta) => {
      setAmplitude((a) => {
        dir.current = Math.abs(a) > BOUND ? -dir.current : dir.current;
        return a + dir.current * speed * delta;
      });
    },
    [speed, dir]
  );

  const abs = Math.abs(amplitude);
  const percentAmplitude = abs / BOUND;
  const stepsArray = useMemo(() => [...Array(steps)], [steps]);

  return (
    <div className="grid w-full place-items-center h-96 relative">
      {stepsArray.map((_, i) => {
        return (
          <div
            key={i}
            data-theme="warning"
            className={`w-96 h-96 will-change-transform absolute border border-theme-active/20`}
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
  );
};

export default () => {
  const [speed, setSpeed] = useState(0.04);
  const [steps, setSteps] = useState(7);

  return (
    <ExperimentWrapper
      description={
        <>
          rotating loading animation — inspo{" "}
          <ExternalLink
            imageHref="/preview/morten-loader.png"
            href="https://twitter.com/mortenjust/status/1614917179907923970"
          >
            @mortenjust
          </ExternalLink>
        </>
      }
    >
      <div className="mt-size-4y">
        <div className="grid sm:grid-cols-2 gap-x-2 gap-y-2 sm:max-w-[12rem]">
          <Text>Speed</Text>
          <Input
            type="number"
            value={speed}
            step={0.01}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="mb-4 sm:mb-0 backdrop-blur-lg"
          />
          <Text>Steps</Text>
          <Input
            type="number"
            value={steps}
            step={1}
            onChange={(e) => setSteps(Number(e.target.value))}
            className="mb-4 sm:mb-0 backdrop-blur-lg"
          />
        </div>
        <Loader speed={speed} steps={steps} />
      </div>
    </ExperimentWrapper>
  );
};
