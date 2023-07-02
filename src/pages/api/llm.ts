import { Configuration as OpenAIConfiguration, OpenAIApi } from "openai";

const configuration = new OpenAIConfiguration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const systemPromptPrefix = `
You are a helpful bot who responds to the user in a custom UI blob.
Your goal is to assist the user is viewing and understanding their data, which is given in a JSON format.
You will be given the schema of the data as TypeScript types, and the current UI that is being displayed to the user.
The UI is written through an API described below. 
You are able to style the UI elements by passing a \`style\` prop, or by using the \`className\` prop, with UI library classes such as 'bg-theme-base','text-theme-base','border-theme-base','bg-theme-active',etc...

API:
UIButton(props: HTMLButtonProps)
UIInput(props: HTMLInputProps)
UIText(props: HTMLTextProps)
etc...
`.trim();

const generateSysPrompt = (schema: string, ui: string) => {
  return `${systemPromptPrefix} + \nSCHEMA: ${schema} + \nUI: ${ui}`;
};

export default async (req, res) => {
  const { prompt, schema, ui } = JSON.parse(req.body);

  if (!prompt) {
    res.statusCode = 400;
    res.json({ error: "prompt is required" });
    return;
  }

  if (!schema) {
    res.statusCode = 400;
    res.json({ error: "schema is required" });
    return;
  }

  if (!ui) {
    res.statusCode = 400;
    res.json({ error: "ui is required" });
    return;
  }

  const completion = await openai.createChatCompletion({
    model: "gpt-4-32k",
    temperature: 0,
    max_tokens: 1024,
    messages: [
      {
        role: "system",
        content: generateSysPrompt(schema, ui)
      },
      {
        role: "user",
        content: prompt as string
      }
    ]
  });

  res.statusCode = 200;
  res.json({ completion: completion.data.choices[0].message.content });
};
