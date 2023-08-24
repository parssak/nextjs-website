import React, { useMemo, useState } from "react";
import { Button, Input } from "@parssa/universal-ui";

const LIMIT = 70;
export default () => {
  const [content, setContent] = useState("");
  const [hidePasses, setHidePasses] = useState(false);

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
      .filter(({ pass }) => (hidePasses && pass !== "True") || !hidePasses)
      .map(({ name, pass }) => `${name.padEnd(LIMIT, " ")} ${pass}`)
      .join("\n");

    return formatted;
  }, [content, hidePasses]);

  return (
    <div>
      <div className="container py-36">
        <div className="flex items-center gap-size-x mb-size-4y">
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <Button onClick={() => setHidePasses(!hidePasses)}>
            {hidePasses ? "Show" : "Hide"} Passes
          </Button>
        </div>

        {formatted && (
          <pre
            onClick={() => {
              navigator.clipboard.writeText(formatted);
            }}
            className="cursor-pointer active:bg-theme-active transition-colors p-2 border rounded border-theme-base"
          >
            <code>
              {formatted.split("\n").map((line) => {
                const name = line.slice(0, LIMIT);
                const pass = line.slice(LIMIT);
                return (
                  <div data-theme={pass.trim() === "True" ? "success" : "error"} className='bg-theme-active/20'>
                    <span className="text-theme-base">{name}</span>
                    <span className="text-theme-active">{pass}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};
