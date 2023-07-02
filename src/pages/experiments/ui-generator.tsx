import * as UI from "@parssa/universal-ui";
import { ExperimentWrapper } from "components/ExperimentWrapper";
import JsonToTS from "json-to-ts";
import React, { useEffect, useMemo, useRef, useState } from "react";

let aState = {};

// define a proxy handler
const handler = {
  get: function (obj: any, prop: any) {
    return obj[prop];
  },
  set: function (obj: any, prop: any, value: any) {
    obj[prop] = value;
    return true;
  }
};

const IS_ARRAY_TYPE = `type Data = RootObject[]`;

const formatLLMCode = (completion: string) => {
  let withElements = completion;
  let done = false;
  while (!done) {
    const prev = withElements;
    withElements = withElements
      .split("")
      .filter((c) => c !== "\n" && c !== "\t" && c !== "\r")
      .join("")
      .replaceAll(/UI(\w+|\w+\.(\w+))\({(.*)}\)/g, (_, p1, p2, p3) => {
        if (p3) {
          return ` React.createElement(UI?.${p1} ?? 'div', {${p3}})`;
        }
        if (p2) {
          return ` React.createElement(UI?.${p1} ?? 'div', {${p2}})`;
        }
        return ` React.createElement(UI?.${p1}) ?? 'div'`;
      });

    done = prev === withElements;
  }

  // done = false;
  // while (!done) {
  //   const prev = withElements;

  //   withElements = withElements.replaceAll(/UIPopover\./g, "UI?.Popover?.");
  //   done = prev === withElements;
  // }

  // const withOptionalArrayChains = withElements.replaceAll(/(\w+).(map|join)\(/g, "$1?.($2)(");
  console.debug(withElements);
  return withElements;
};

const buildBaseUIFromSchema = (schema: string[]) => {
  if (!schema) return "";
  if (!Array.isArray(schema)) {
    console.error("Schema is not generated.");
    return "";
  }

  if (schema.length === 0) {
    return "";
  }

  const isSchemaArray = schema.find((s) => s === IS_ARRAY_TYPE);
  if (!isSchemaArray) {
    console.error("Data is not array-like.");
    return "";
  }

  const rootObject = schema.find((s) => s.includes("interface RootObject"));

  if (!rootObject) {
    console.error("RootObject is not defined.");
    return "";
  }

  const types = rootObject
    .split("{")[1]
    .split("}")[0]
    .split("\n")
    .filter(Boolean)
    .map((s) =>
      s
        .trim()
        .split(":")
        .map((s) => s.replace(";", "").trim())
    );

  const PRIMITIVE_TYPES = new Set(["string", "number", "boolean"]);

  const code = `UIdiv({
    className: 'space-y-size-x',
    children: [
      ...getState('data')?.map((item, i) => {
        return UICard({
          key: \`RootObject-\$\{i\}\`,
          children: [
            ${types
              .filter(([_, value]) => PRIMITIVE_TYPES.has(value))
              .map(([key]) => {
                return `UIdiv({
                key: '${key}',
                className: 'border-b border-theme-muted p-size-x',
                children: [
                  UIText({
                    key: '${key}-label',
                    as: 'span',
                    variant: 'h5',
                    className: 'mr-size-hx',
                    children: '${key}:'
                  }),
                  UIText({
                    key: '${key}-value',
                    as: 'span',
                    children: \`\$\{item['${key}']\}\`
                  })
                ]
              }),`;
              })}
            ${types
              .filter(([_, value]) => !PRIMITIVE_TYPES.has(value))
              .map(([key]) => {
                return `UIdiv({
                key: '${key}',
                className: 'border-b border-theme-muted p-size-x',
                children: [
                  UIText({
                    key: '${key}-label',
                    as: 'span',
                    variant: 'h5',
                    className: 'mr-size-hx',
                    children: '${key}:'
                  }),
                  UIPopover({
                    key: '${key}-popover',
                    children: [
                      UIPopover.Trigger({
                        key: '${key}-trigger',
                        children: [
                          UIButton({
                            key: '${key}-trigger-text',
                            children: 'View'
                          })
                        ]
                      }),
                      UIPopover.Content({
                        key: '${key}-content',
                        children: [
                          UIText({
                            key: '${key}-content-text',
                            children: JSON.stringify(item['${key}'], null, 2)
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),`;
              })}
          ]
        })
      })
    ]
  })`;

  return code;
};

const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};

const RenderedUI = ({ code }: { code: string }) => {
  const mounted = useMounted();

  useEffect(() => {
    window.React = React;
    // @ts-ignore
    UI.Fragment = React.Fragment;
    // @ts-ignore
    window.UI = UI;
  }, []);
  if (!mounted) return null;
  if (typeof window === "undefined") return null;
  if (!code) return null;

  return (
    <UI.UniversalUIConfigProvider
      config={{
        components: {
          card: "p-size-x"
        }
      }}
    >
      {eval(code)}
    </UI.UniversalUIConfigProvider>
  );
};

// create a proxy
const proxy = new Proxy(aState, handler);

export default () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState<any>();
  const [modelFriendlyUI, setModelFriendlyUI] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // const [formatted, setFormatted] = useState<string>("");

  const [_, setAppState] = useState({});

  const [showSchema, setShowSchema] = useState(true);
  const schema = useMemo(() => {
    if (!data) return [];
    try {
      const parsed = JSON.parse(data);
      proxy["data"] = parsed;
      const schemas = JsonToTS(parsed);
      if (Array.isArray(parsed)) schemas.push(IS_ARRAY_TYPE);
      setError("");
      return schemas;
    } catch (err) {
      setError(err.message);
      return [];
    }
  }, [data]);

  const onDataSet = () => {
    const ui = buildBaseUIFromSchema(schema);
    setModelFriendlyUI(ui);
    // setFormatted(formatLLMCode(ui));
  };

  useEffect(() => {
    // @ts-ignore
    window.setState = (key: string, value: any) => {
      proxy[key] = value;
      setAppState({ ...proxy });
    };
    // @ts-ignore
    window.getState = (key: string) => {
      return proxy[key];
    };
  }, []);

  const onSubmit = async () => {
    if (loading) return;
    if (!prompt) {
      setError("Please enter a prompt");
      return;
    }

    if (!schema) {
      setError("Please enter a schema");
      return;
    }

    if (!formatted) {
      setError("Please set your data");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/llm", {
        method: "POST",
        body: JSON.stringify({ prompt, schema, ui: modelFriendlyUI })
      });
      const { completion }: { completion: string } = await response.json();
      console.debug(completion);
      setModelFriendlyUI(completion);
      // const formatted = formatLLMCode(completion);
      // setFormatted(formatted);
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formatted = useMemo(() => formatLLMCode(modelFriendlyUI), [modelFriendlyUI]);

  return (
    <ExperimentWrapper description="Fun with GPT4">
      <div className="flex w-full gap-size-x mb-size-x">
        <UI.Input
          value={prompt}
          placeholder="Enter prompt here..."
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSubmit()}
          disabled={loading}
        />
        <UI.Input
          value={data}
          placeholder="Enter data here..."
          onChange={(e) => setData(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && onSubmit()}
          disabled={loading}
        />
        <UI.Button onClick={onDataSet}>Set Data</UI.Button>
      </div>
      {schema && schema.length > 0 && (
        <UI.Card>
          <UI.Card.Content>
            <UI.Text onClick={() => setShowSchema((p) => !p)} variant="h3">
              Schema
            </UI.Text>
            {showSchema && (
              <pre>
                {Array.isArray(schema) ? schema.map((obj, i) => <pre key={i}>{obj}</pre>) : schema}
              </pre>
            )}
          </UI.Card.Content>
        </UI.Card>
      )}
      {loading && <UI.Text>Loading...</UI.Text>}
      {!!error && (
        <UI.Card theme="error" className="my-size-x">
          <UI.Card.Content>
            <UI.Text variant="h5">Error</UI.Text>
            <UI.Text>{error}</UI.Text>
          </UI.Card.Content>
        </UI.Card>
      )}

      <div className="pt-4">
        <RenderedUI code={formatted} />
      </div>
    </ExperimentWrapper>
  );
};
