import "./App.css";
import { SSE } from "sse";
import { useState, useRef, useEffect } from "react";
import openai from "./openai/openai";

function App() {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const openAI = openai();

  const [inputValue, setValue] = useState("");
  const [result, setResult] = useState("");

  const resultRef = useRef();

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  function handleChange(event) {
    setValue(event.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    setResult("");

    if (inputValue !== "") {
      // setIsLoading(true);
      let url = "https://api.openai.com/v1/chat/completions";
      let data = {
        model: "gpt-3.5-turbo",
        // model: "text-davinci-003",
        messages: [{ role: "user", content: inputValue }],
        temperature: 0.75,
        top_p: 0.95,
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
          if (text !== "\n") {
            resultRef.current = resultRef.current + text;
            setResult(resultRef.current);
          }
        } else {
          source.close();
        }
      });

      source.addEventListener("readystatechange", (e) => {
        if (e.readyState >= 2) {
          // setIsLoading(false);
        }
      });

      source.stream();
    } else {
      alert("Please insert a prompt!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>AI project - CS280 - Winter 2023</p>
        <p>Bradley Bateman</p>
      </header>
      <form>
        <input
          id="input-box"
          type="text"
          onChange={handleChange}
          value={inputValue}
        ></input>
        <button onClick={handleClick}>Send</button>
      </form>

      <div
        style={{
          color: "white",
          whiteSpace: "pre-line",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
