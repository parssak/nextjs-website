import React, { useState } from "react";
import { Button, Text } from "@parssa/universal-ui";

export default () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <Text>Contact information</Text>
      <Button as="a" href="tel:14158905827">
        415-890-5827
      </Button>
    </div>
  );
};
