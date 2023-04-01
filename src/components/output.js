import ReactMarkdown from "react-markdown";
import { useAPI } from "../state/APIContext";

export default function Output() {
  const { result } = useAPI();
  return <ReactMarkdown>{result}</ReactMarkdown>;
}
