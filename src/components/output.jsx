import ReactMarkdown from "react-markdown";
import { useAPI } from "../state/APIContext";
import { useState, useEffect } from "react";

export default function Output() {
  const { result } = useAPI();

  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(result);
  }, [result]);
  return <ReactMarkdown>{value}</ReactMarkdown>;
}
