import { Button, Input } from "@parssa/universal-ui";
import React, { useState } from "react";

export default () => {
  const [amount, setAmount] = useState(10);
  return (
    <div className="space-y-4 p-4">
      <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      {Array.from({ length: amount }).map((_, i) => (
        <div
          id={`section-${i}`}
          key={i}
          className="bg-theme-muted rounded-xl grid place-items-center min-h-[25vh]"
        >
          <Button>Section {i}</Button>
        </div>
      ))}
    </div>
  );
};
