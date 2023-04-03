import PropTypes from "prop-types";
import "./fade.css";

Fade.propTypes = {
  props: PropTypes.any,
  transition: PropTypes.string,
  children: PropTypes.node,
};

export default function Fade({ transition, children }) {
  return <div className={`fade-${transition}-text`}>{children}</div>;
}
