import React, { useState } from "react";
import { Button, Checkbox, Popover, Text, Select } from "@parssa/universal-ui";

export default () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <div>
        <Text size="sm" className="font-medium mb-2">
          Pick your favorite fruit.
        </Text>
        <Select>
          <Select.Trigger />
          <Select.Panel>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="orange">Orange</Select.Item>
          </Select.Panel>
        </Select>
      </div>
    </div>
  );
};
