import React, { useMemo, useState } from "react";
import { Input } from "@parssa/universal-ui";

export default () => {
  const [content, setContent] = useState("");

  const formatted = useMemo(() => {
    const DELIMITER =
      "+------+------------------------------------------------------------------------+----------+----------------+----------------+----------------+";
    const formatted = content
      .split(DELIMITER)
      .filter((e) => e.trim().length > 0)
      .map((e) =>
        e
          .trim()
          .split("|")
          .map((e) => e.trim())
          .filter((e) => e.length > 0)
      )
      .filter((e) => e.length === 6 && Number(e[0]))
      .map(([_, name, pass]) => ({
        name,
        pass
      }))
      .map(({ name, pass }) => `${name.padEnd(70, " ")} ${pass}`)
      .join("\n");

    return formatted;
  }, [content]);

  return (
    <div>
      <div className="container py-36">
        <Input
          className="mb-size-4y"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {formatted && (
          <pre
            onClick={() => {
              navigator.clipboard.writeText(formatted);
            }}
            className="cursor-pointer active:bg-theme-active transition-colors p-2 border rounded border-theme-base"
          >
            <code>{formatted}</code>
          </pre>
        )}
      </div>
    </div>
  );
};
