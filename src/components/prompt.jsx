import { useEffect } from "react";
import { useAPI } from "../state/APIContext";
import PropTypes from "prop-types";

Prompt.PropTypes = {
  text: PropTypes.string,
};

export default function Prompt() {
  const { submitRequest } = useAPI();
  const { text } = this.props;

  useEffect(() => {
    const result = () => submitRequest(text);
    return result;
  }, [text]);

  return <div className="Prompt">{text}</div>;
}
