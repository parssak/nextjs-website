import React, { useState } from "react";
import { Button, Input, Text } from "@parssa/universal-ui";

export default () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex max-w-xs mx-auto flex-col items-center justify-center bg-theme-muted/50 pb-[50vh] gap-size-x">
      <Button
        className="w-full"
        size="lg"
        theme={showPassword ? "success" : "error"}
        onClick={() => setShowPassword((p) => !p)}
      >
        Make Page {showPassword ? "Not Sensitive" : "Sensitive"}
      </Button>
      {showPassword && (
        <form className="w-full">
          <Input className="w-full" type="password" placeholder="Password" />
        </form>
      )}
    </div>
  );
};
