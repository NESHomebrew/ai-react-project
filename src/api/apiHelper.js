import { SSE } from "sse";
import { useState, useRef, useEffect } from "react";

export function apiHelper() {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const [inputValue, setValue] = useState("");
  const [result, setResult] = useState("");

  const resultRef = useRef();

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  async function handleClick(e) {
    e.preventDefault();
    console.log("entered");
    setResult("");

    if (inputValue !== "") {
      let url = "https://api.openai.com/v1/chat/completions";
      let data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: inputValue }],
        temperature: 0.75,
        max_tokens: 1000,
        stream: true,
        n: 1,
      };

      let source = new SSE(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        method: "POST",
        payload: JSON.stringify(data),
      });

      source.addEventListener("message", (e) => {
        if (e.data !== "[DONE]") {
          let payload = JSON.parse(e.data);
          let text = payload.choices[0].delta.content ?? "";
          resultRef.current = resultRef.current + text;
          setResult(resultRef.current);
        } else {
          source.close();
        }
      });

      source.addEventListener("readystatechange", (e) => {
        if (e.readyState >= 2) {
        }
      });

      source.stream();
    } else {
      alert("Please insert a prompt!");
    }
  }
}
