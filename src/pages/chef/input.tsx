import React, { useState } from "react";
import { Button, Input, Text } from "@parssa/universal-ui";

export default () => {
  const [value, setValue] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <Text className="mb-size-4y">{value}</Text>
      <Input
        placeholder="Enter some text..."
        size="lg"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};
