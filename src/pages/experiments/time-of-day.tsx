import { Button, Card, InputGroup, Text } from "@parssa/universal-ui";
import { ExperimentHeader } from "components/ExperimentHeader";
import React, { useState } from "react";
import { cx } from "utils";

const hours = {
  0: "midnight",
  1: "night",
  2: "night",
  3: "night",
  4: "night",
  5: "night",
  6: "morning",
  7: "morning",
  8: "morning",
  9: "morning",
  10: "morning",
  11: "morning",
  12: "noon",
  13: "afternoon",
  14: "afternoon",
  15: "afternoon",
  16: "afternoon",
  17: "afternoon",
  18: "evening",
  19: "evening",
  20: "dusk",
  21: "night",
  22: "night",
  23: "night"
} as const;

type Hour = keyof typeof hours;
type TimeOfDay = typeof hours[Hour];

const timesToColors = {
  midnight: "from-[#354465] to-[#15162D]",
  night: "from-[#536A9D] to-[#252750]",
  morning: "from-[#AE8178] to-[#79ADE3]",
  noon: "from-[#84C6EC] to-[#79ADE3]",
  afternoon: "from-[#84C6EC] to-[#79ADE3]",
  evening: "from-[#79ADE3] to-[#7B93B9]",
  dusk: "from-[#89240D] via-[#131322] to-[#131322]"
} as const;

const rawColors = {
  midnight: ["#354465", "#15162D"],
  night: ["#536A9D", "#252750"],
  morning: ["#AE8178", "#79ADE3"],
  noon: ["#84C6EC", "#79ADE3"],
  afternoon: ["#84C6EC", "#79ADE3"],
  evening: ["#79ADE3", "#7B93B9"],
  dusk: ["#89240D", "#131322"]
};

const TODContainer = ({
  timeOfDay,
  as = "div",
  children,
  ...props
}: { timeOfDay?: TimeOfDay; as?: string } & DivProps) => {
  const tod = timeOfDay || (hours[new Date().getHours()] as TimeOfDay);

  const isDark = ["midnight", "night", "dusk"].includes(tod);

  return React.createElement(
    as,
    {
      ...props,
      className: cx(`relative overflow-hidden`, props.className),
      "data-dark": isDark,
      "data-override": "true",
      "data-theme": "neutral"
    },
    <>
      {Object.entries(timesToColors).map(([t, colors]) => (
        <div
          key={t}
          className={`absolute inset-0 transition-all
            ${t === tod ? "opacity-100 duration-1000 z-10" : "opacity-50 duration-1000"}`}
          onTransitionEnd={(e) => {
            if (e.propertyName === "opacity") {
              console.debug(
                e.propertyName,
                (e.target as HTMLElement).classList.contains("opacity-100")
              );
              // e.currentTarget.style.zIndex = t === tod ? "20" : "10";
            }
          }}
        >
          <div
            className={`duration-500 blur scale-125  absolute h-full inset-0 w-full rounded-3xl bg-gradient-to-t transition-all ${colors} 
              ${t === tod ? "" : "scale-y-105"}`}
          ></div>
        </div>
      ))}
      <div className="relative z-20">{children}</div>
    </>
  );
};

export default () => {
  // const [time, setTime] = useState(new Date().getHours());

  // const timeOfDay = hours[time] as TimeOfDay;

  const [timeOfDay, setTod] = useState(hours[new Date().getHours()] as TimeOfDay);

  return (
    <div>
      <ExperimentHeader title="Time Of Day" />
      <div className="container pt-24">
        <TODContainer
          className="h-96 rounded-3xl grid place-items-center mt-size-4y"
          timeOfDay={timeOfDay}
        >
          <Card>
            <Text className="px-size-x font-mono text-theme-active">time of day: {timeOfDay}</Text>
          </Card>
        </TODContainer>

        <div className="grid gap-y-size-y mt-size-4y gap-x-size-x md:grid-cols-7">
          {Object.keys(timesToColors).map((tod) => (
            <TODContainer
              as="button"
              key={tod}
              onClick={() => setTod(tod as TimeOfDay)}
              className={`py-size-2y cursor-pointer md:py-size-8x rounded-xl grid place-items-center border-4  transition-all ease-spring 
              ${timeOfDay === tod ? "border-blue-600 scale-105" : "border-transparent scale-100"}`}
              timeOfDay={tod as any}
            >
              <Card size="sm" className="bg-theme-pure/60 px-size-x">
                <Text className="font-mono text-theme-active">{tod}</Text>
              </Card>
            </TODContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
