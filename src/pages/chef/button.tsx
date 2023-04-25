import React, { useState } from "react";
import { Button, Text } from "@parssa/universal-ui";

export default () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted pb-[50vh]">
      <Text className="mb-size-4y">Counter: {counter}</Text>
      <Button
        className="rounded-full pl-size-2x pr-size-2x font-mono font-semibold tracking-normal"
        size="lg"
        theme="error"
        onClick={() => setCounter((p) => p + 1)}
      >
        BIG RED BUTTON
      </Button>
    </div>
  );
};
