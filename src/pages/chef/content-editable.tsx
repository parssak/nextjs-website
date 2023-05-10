import React, { useState } from "react";
import { Button, Card, Input, Text, TextArea } from "@parssa/universal-ui";

export default () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-muted/50 pb-[50vh]">
      <label className="block w-full max-w-sm ">
        <Text as="span" size="sm">
          Add comment
        </Text>
        <Card size="lg" className="w-full mt-2 overflow-hidden">
          <Card.Content
            contentEditable
            dangerouslySetInnerHTML={{
              __html: "This content is editable."
            }}
            className="focus:outline-none focus:bg-theme-active/50 transition-colors"
          />
        </Card>
      </label>
    </div>
  );
};
