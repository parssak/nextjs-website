import React, { useState } from "react";

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
  midnight: "from-[#354465] to-[#15162D] text-white",
  night: "from-[#536A9D] to-[#252750] text-white",
  morning: "from-[#AE8178] to-[#79ADE3]",
  noon: "from-[#79ADE3] to-[#7B93B9]",
  afternoon: "from-[#79ADE3] to-sky-200",
  evening: "from-blue-500 to-sky-200",
  dusk: "from-[#89240D] via-[#131322] to-[#131322]"
} as const;

export default () => {
  const [time, setTime] = useState(new Date().getHours());

  console.debug(time);

  const timeOfDay = hours[time] as TimeOfDay;

  const colors = timesToColors[timeOfDay];

  return (
    <div className="container pt-24">
      <input
        type="range"
        min={0}
        className="mb-6"
        max={23}
        value={time}
        onChange={(e) => {
          setTime(parseInt(e.target.value) === 23 ? 0 : parseInt(e.target.value));
        }}
      />
      <div className="h-96 relative overflow-hidden rounded-3xl">
        {Object.entries(timesToColors).map(([t, colors]) => (
          <div
            className={`absolute inset-0
            ${t === timeOfDay ? "opacity-100 duration-500 z-20" : "opacity-0 duration-500 z-10"}`}
          >
            <div
              className={`font-extrabold blur-xl scale-150 absolute h-full inset-0 w-full rounded-3xl bg-gradient-to-t transition-all ${colors}`}
            ></div>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-white font-medium italic">{t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
