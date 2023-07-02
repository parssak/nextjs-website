import React, { useState } from "react";
import { Button, Checkbox, Popover, Text } from "@parssa/universal-ui";
import { Calendar } from "components/Calendar";

export default () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      {date && <Text className="mb-size-4y">Selected Date: {date.toLocaleDateString()}</Text>}
      <Popover>
        <Popover.Trigger>
          <Button>Pick a date</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </Popover.Content>
      </Popover>
    </div>
  );
};
