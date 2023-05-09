import React, { useState } from "react";
import { Button, Input, Text } from "@parssa/universal-ui";

export default () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh] gap-size-x">
      <Button
        className="rounded-full pl-size-2x pr-size-2x font-mono font-semibold tracking-normal"
        size="lg"
        theme="error"
        onClick={() => setShowPassword((p) => !p)}
      >
        Make Page {showPassword ? "Not Sensitive" : "Sensitive"}
      </Button>
      {showPassword && <Input type="password" placeholder="Password" />}
    </div>
  );
};
