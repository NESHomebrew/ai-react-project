import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-44vfEBhpmqtnkew0qAsK5Soq",
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export default function openai() {
  return new OpenAIApi(configuration);
}
