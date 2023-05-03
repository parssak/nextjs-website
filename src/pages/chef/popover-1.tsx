import React, { useState } from "react";
import { Button, Checkbox, Popover, Text } from "@parssa/universal-ui";

export default () => {
  const [telemetryEnabled, setTelemetryEnabled] = useState(true);
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted pb-[50vh]">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger>
          <Button>Change Settings</Button>
        </Popover.Trigger>
        <Popover.Content></Popover.Content>
      </Popover.Root>
      {open && (
        <Button onClick={() => setTelemetryEnabled((p) => !p)}>
          {telemetryEnabled ? "Disable" : "Enable"} Telemetry
        </Button>
      )}
    </div>
  );
};
