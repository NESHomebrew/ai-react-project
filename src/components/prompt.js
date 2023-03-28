import { useEffect } from "react";

export default function Prompt({ text, setValue, handleClick }) {
  useEffect(() => {
    // setValue(text);
    // handleClick();
  }, []);

  return <div className="Prompt">{text}</div>;
}
