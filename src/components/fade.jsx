import PropTypes from "prop-types";
import "./fade.css";

export default function Fade() {
  const { transition, children } = this.props;
  return <div className={`fade-${transition}-text`}>{children}</div>;
}

Fade.PropTypes = {
  transition: PropTypes.string,
  children: PropTypes.node,
};
