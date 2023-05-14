import React, { useState } from "react";
import { Button, Input, Text } from "@parssa/universal-ui";

export default () => {
  const [value, setValue] = useState("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <Text as="a" href="/chef/popover">
        Go to Account Settings
      </Text>
    </div>
  );
};
