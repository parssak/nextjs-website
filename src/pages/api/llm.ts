import { Configuration as OpenAIConfiguration, OpenAIApi } from "openai";

const configuration = new OpenAIConfiguration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const systemPromptPrefix = `
You are a helpful bot who responds to the user by modifying their UI.
Your goal is to assist the user is viewing and understanding their data, which is given in a JSON format.
You will be given the schema of the data as TypeScript types, and the current UI that is being displayed to the user.
The UI is written through an API described below. 
You are able to style the UI elements by passing a \`style\` prop, or by using the \`className\` prop, with UI library classes such as 'bg-theme-base','text-theme-base','border-theme-base','bg-theme-active',etc...
Do not respond with anything other than the updated UI for the user.
Do not leave any comments, always write out the full updated UI.
Do not leave any comments depicting that things are the "same as before", always write out the full updated UI that can be run directly.
For example, do not any include any comments such as: "// All the UIdivs for each property as before "
Do not expect the user to be able to modify the UI themselves, they are not a developer.

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
    max_tokens: 12000,
    messages: [
      {
        role: "system",
        content: generateSysPrompt(schema, ui)
      },
      {
        role: "user",
        content: (prompt as string) + "\nNEW UI:"
      }
    ]
  });

  res.statusCode = 200;
  res.json({ completion: completion.data.choices[0].message.content });
};
