import { useState } from "react";
import { useAPI } from "../state/APIContext";

export default function Input() {
  const { submitRequest, setResult } = useAPI();
  const [inputValue, setValue] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setResult("");
    submitRequest(inputValue);
  }

  function handleChange(e) {
    e.preventDefault();

    setValue(e.target.value);
  }

  return (
    <form>
      <input
        id="input-box"
        type="text"
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button onClick={handleClick}>Send</button>
    </form>
  );
}
