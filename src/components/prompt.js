import { useEffect } from "react";
import { useAPI } from "../state/APIContext";

export default function Prompt({ text }) {
  const { submitRequest } = useAPI();

  useEffect(() => {
    const result = submitRequest(text);
    return result;
  }, []);

  return <div className="Prompt">{text}</div>;
}
