import PropTypes from "prop-types";

Options.propTypes = {
  props: PropTypes.any,
  text: PropTypes.string,
};

export default function Options({ text }) {
  return <div className="OptionsText">{text}</div>;
}
