import { Card, Text } from "@parssa/universal-ui";
import { ExperimentHeader } from "components/ExperimentHeader";
import React, { useEffect, useMemo, useState } from "react";
import { cx } from "utils";

const HOURS_TO_TOD = {
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
  12: "afternoon",
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

const TIMES_TO_COLORS = {
  midnight: ["#2B3073", "#0B0C1D"],
  night: ["#536A9D", "#252750"],
  morning: ["#79ADE3", "#AE8178"],
  afternoon: ["#84C6EC", "#7983E3"],
  evening: ["#5086D9", "#7ACDE2"],
  dusk: ["#89240D", "#0D0C24"]
};

type Hour = keyof typeof HOURS_TO_TOD;
type TimeOfDay = typeof HOURS_TO_TOD[Hour];

const lerpColor = (a: string, b: string, amount: number) => {
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

const lerp = (a: number, b: number, amount: number) => {
  return a + amount * (b - a);
};

const TODContainer = ({
  timeOfDay,
  as = "div",
  children,
  wrapperClasses = "",
  ...props
}: { timeOfDay?: TimeOfDay; as?: string; wrapperClasses?: string } & DivProps) => {
  const tod = timeOfDay || (HOURS_TO_TOD[new Date().getHours()] as TimeOfDay);

  const isDark = ["midnight", "night", "dusk"].includes(tod);

  const colorA = TIMES_TO_COLORS[tod][0];
  const colorB = TIMES_TO_COLORS[tod][1];

  const [currentColors, setCurrentColors] = useState([colorA, colorB]);

  const targetDegrees = useMemo(
    () => [
      Math.floor(Math.random() * -180),
      Math.floor(Math.random() * 180),
      Math.floor(Math.random() * -180),
      Math.floor(Math.random() * 180),
      Math.floor(Math.random() * -180),
      Math.floor(Math.random() * 180)
    ],
    [colorA, colorB]
  );

  const [currentDegrees, setCurrentDegrees] = useState(targetDegrees);

  useEffect(() => {
    const interval = setInterval(() => {
      let isSame = false;
      // setcurrentColors[0]((prev) => {
      //   const newColor = lerpColor(prev, colorA, 0.05);
      //   if (newColor.toUpperCase() === colorA.toUpperCase()) {
      //     isSame = true;
      //   }
      //   return newColor;
      // });
      // setcurrentColors[1]((prev) => {
      //   const newColor = lerpColor(prev, colorB, 0.04);
      //   if (newColor.toUpperCase() === colorB.toUpperCase()) {
      //     isSame = true;
      //   }
      //   return newColor;
      // });

      // if (isSame) {
      //   clearInterval(interval);
      // }

      setCurrentColors((prev) => {
        const newColors = prev.map((prevColor, i) => {
          const newColor = lerpColor(prevColor, [colorA, colorB][i], 0.04);
          if (newColor.toUpperCase() === [colorA, colorB][i].toUpperCase()) {
            isSame = true;
          }
          return newColor;
        });

        if (isSame) {
          clearInterval(interval);
        }

        return newColors;
      });
    }, 1000 / 60);

    return () => {
      clearInterval(interval);
    };
  }, [colorA, colorB]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDegrees((prev) => {
        if (prev[0] === targetDegrees[0]) {
          clearInterval(interval);
          return prev;
        }

        return prev.map((deg, i) => {
          return lerp(deg, targetDegrees[i], (i + 1) * 0.01);
        });
      });
    }, 1000 / 60);

    return () => {
      clearInterval(interval);
    };
  }, [...targetDegrees]);

  return React.createElement(
    as,
    {
      ...props,
      className: cx(`relative overflow-hidden isolate rounded-xl`, props.className),
      "data-dark": isDark,
      "data-override": "true",
      "data-theme": "neutral"
    },
    <div className={wrapperClasses}>
      <div className={`absolute inset-0 transition-all`}>
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
              conic-gradient(from ${currentDegrees[0]}deg at 25.21% 60%, ${currentColors[0]}aa 0deg, ${currentColors[1]}aa 360deg),
              conic-gradient(from ${currentDegrees[1]}deg at 80.6% 75%, ${currentColors[1]}ff 0deg, ${currentColors[0]}ee 360deg),
              linear-gradient(180deg, ${currentColors[1]} 0%, ${currentColors[0]} 96%), 
                 #000000`
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-1000 mix-blend-overlay opacity-50"
          style={{
            background: `
              conic-gradient(from ${currentDegrees[2]}deg at 25.21% 60%, ${currentColors[0]}aa 0deg, ${currentColors[1]}aa 360deg),
              conic-gradient(from ${currentDegrees[3]}deg at 80.6% 75%, ${currentColors[1]}ff 0deg, ${currentColors[0]}ee 360deg),
              linear-gradient(180deg, ${currentColors[1]} 0%, ${currentColors[0]} 96%), 
                 #000000`
          }}
        />
        <div
          className="absolute inset-0 transition-all duration-1000 mix-blend-overlay "
          style={{
            background: `
              conic-gradient(from ${currentDegrees[4]}deg at 25.21% 60%, ${currentColors[0]}aa 0deg, ${currentColors[1]}aa 360deg),
              conic-gradient(from ${currentDegrees[5]}deg at 80.6% 75%, ${currentColors[1]}ff 0deg, ${currentColors[0]}ee 360deg),
              linear-gradient(180deg, ${currentColors[1]} 0%, ${currentColors[0]} 96%), 
                 #000000`
          }}
        />
        <div className="absolute inset-0" />
      </div>
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default () => {
  const [timeOfDay, setTod] = useState(HOURS_TO_TOD[new Date().getHours()] as TimeOfDay);

  // const times = Object.keys(hours) as TimeOfDay[];
  const times = Array.from(new Set(Object.values(HOURS_TO_TOD)));
  return (
    <div>
      <ExperimentHeader />
      <div className="container pt-6">
        <TODContainer className="h-96 grid place-items-center" timeOfDay={timeOfDay}>
          <div className="contrast-200 ">
            <Text className="px-size-x text-theme-active italic">{timeOfDay}</Text>
          </div>
        </TODContainer>

        <div
          className="grid grid-cols-2 md:flex md:flex-row gap-y-size-y mt-size-4y"
          onKeyDownCapture={(e) => {
            if (e.key === "ArrowRight") {
              let setTo;
              setTod((prev) => {
                const index = times.indexOf(prev);
                setTo = times[index + 1] || times[0];
                return setTo;
              });
              if (document.activeElement && document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
              document.getElementById(setTo)?.focus();
            } else if (e.key === "ArrowLeft") {
              let setTo;
              setTod((prev) => {
                const index = times.indexOf(prev);
                setTo = times[index - 1] || times[times.length - 1];
                return setTo;
              });
              if (document.activeElement && document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
              }
              document.getElementById(setTo)?.focus();
            }
          }}
        >
          {times.map((tod) => (
            <div
              className={`group w-full ${
                tod === timeOfDay ? "md:w-[150%] " : "hover:md:w-[150%]"
              }  transition-all duration-500 ease-spring`}
              key={tod}
            >
              <TODContainer
                as="button"
                id={tod}
                key={tod}
                onClick={() => setTod(tod as TimeOfDay)}
                className={`focus:outline-none py-size-8y w-full cursor-pointer md:py-size-8x grid place-items-center border-4 transition-all 
              ${timeOfDay === tod ? "border-blue-600 scale-100" : "border-transparent scale-100"}`}
                timeOfDay={tod as any}
              >
                <Card size="sm" className="bg-theme-pure/60 px-size-x">
                  <Text className="font-mono text-theme-active">{tod}</Text>
                </Card>
              </TODContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
