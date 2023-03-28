import "./App.css";
import ReactMarkdown from "react-markdown";
import { SSE } from "sse";
import { useState, useRef, useEffect } from "react";
import Input from "./components/input";
import ScriptReader from "./components/scriptReader";

function App() {
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const [inputValue, setValue] = useState("");
  const [result, setResult] = useState("");
  const [mode, setMode] = useState("");
  const [index, setIndex] = useState(0);

  const resultRef = useRef();

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  function handleChange(event) {
    setValue(event.target.value);
  }

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

  function updateValue(someValue) {
    setValue(someValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>AI project - CS280 - Winter 2023</p>
        <p>Bradley Bateman</p>
      </header>

      <ScriptReader
        index={index}
        setIndex={setIndex}
        setMode={setMode}
        setValue={updateValue}
        handleClick={handleClick}
      />
      {mode === "input" && (
        <Input
          handleChange={handleChange}
          inputValue={inputValue}
          handleClick={handleClick}
        />
      )}

      <div
        style={{
          color: "white",
          whiteSpace: "pre-line",
          paddingLeft: "10vw",
          paddingRight: "10vw",
        }}
      >
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
