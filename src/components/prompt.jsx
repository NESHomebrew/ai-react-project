import { useEffect } from "react";
import { useAPI } from "../state/APIContext";
import PropTypes from "prop-types";

Prompt.propTypes = {
  props: PropTypes.any,
  text: PropTypes.string,
};

export default function Prompt({ text }) {
  const { submitRequest } = useAPI();

  useEffect(() => {
    submitRequest(text);
  }, [text]);

  return <div className="Prompt">{text}</div>;
}
