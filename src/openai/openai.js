import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-Lu5Lwe4u0bimIIXSOvaqlxGS",
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export function openai() {
  return new OpenAIApi(configuration);
}
