import React, { useContext, useState, useEffect, useRef } from "react";
import { SSE } from "sse";

const APIContext = React.createContext();

export function useAPI() {
  return useContext(APIContext);
}

export function APIProvider({ children }) {
  const [result, setResult] = useState("");

  const resultRef = useRef();

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  function apiHelper(message) {
    console.log("APIHelper", message);

    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    const inputValue = message;

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

  function submitRequest(message) {
    console.log("Message:", message);
    setResult("");
    apiHelper(message);
    setResult(result);
  }

  const value = {
    result,
    submitRequest,
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}
