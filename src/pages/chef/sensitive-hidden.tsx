import React, { useState } from "react";
import { Button, Input, Text } from "@parssa/universal-ui";

export default () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex mx-auto flex-col items-center justify-center bg-theme-muted/50 pb-[50vh] gap-size-x">
      <div className="max-w-xs flex flex-col w-full items-center">
        <Button
          className="w-full"
          size="lg"
          theme={showPassword ? "success" : "error"}
          onClick={() => setShowPassword((p) => !p)}
        >
          Make Page {showPassword ? "Not Sensitive" : "Sensitive (But Hidden, so shouldn't trigger)"}
        </Button>
        {showPassword && (
          <form className="w-full hidden">
            <Input className="w-full" type="password" placeholder="Password" />
          </form>
        )}
      </div>
    </div>
  );
};
