import PropTypes from "prop-types";

After.propTypes = {
  props: PropTypes.any,
  text: PropTypes.string,
};

export default function After({ text }) {
  return <div className="AfterText">{text}</div>;
}
