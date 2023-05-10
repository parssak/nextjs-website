import React, { useState } from "react";
import { Button, Input, Text, TextArea } from "@parssa/universal-ui";

export default () => {
  const [value, setValue] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <Text className="mb-size-4y">{value}</Text>
      <textarea
        className="tracking-tight rounded border disabled:opacity-75 disabled:cursor-not-allowed enabled:hover:transition-colors focus:outline-none ring-0 focus-within:relative transition-[ring] focus-within:z-20 focus:ring focus-within:ring focus:ring-theme-base/50 focus-within:ring-theme-base/50 font-normal placeholder:opacity-50 truncate w-max flex p-size-x text-size leading-size text-theme-base placeholder:text-theme-muted group-data-[uui=true]/card:border-theme-base bg-theme-pure border-theme-base "
        placeholder="Enter some text..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
