import React, { useState } from "react";
import { Button, Card, Checkbox, Popover, Text } from "@parssa/universal-ui";

export default () => {
  const [telemetryEnabled, setTelemetryEnabled] = useState(true);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <Popover.Root>
        <Popover.Trigger>
          <Button>Change Settings</Button>
        </Popover.Trigger>
        <Popover.Content>
          {/* <label className="flex items-center gap-size-hx">
            <Checkbox aria-label="Enable Telemetry" />
            <Text>Enable Telemetry</Text>
          </label> */}
          <Button onClick={() => setTelemetryEnabled((p) => !p)}>
            {telemetryEnabled ? "Telemetry is enabled" : "Telemetry is disabled"}
          </Button>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};
