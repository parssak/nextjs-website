import React, { useState } from "react";
import { Button, Checkbox, Popover, Text, Select } from "@parssa/universal-ui";

export default () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <div>
        <Text size="sm" className="font-medium mb-2">
          Pick your favorite fruit.
        </Text>
        <select>
          <Select value="apple">Apple</Select>
          <Select value="banana">Banana</Select>
          <Select value="orange">Orange</Select>
        </select>
      </div>
    </div>
  );
};
