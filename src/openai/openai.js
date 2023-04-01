import { Configuration, OpenAIApi } from "openai";

export const configuration = new Configuration({
  organization: process.env.REACT_APP_OPENAI_ORG,
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export function openai() {
  return new OpenAIApi(configuration);
}
