import PropTypes from "prop-types";

Options.propTypes = {
  props: PropTypes.any,
  text: PropTypes.array,
};

export default function Options({ text }) {
  return <div className="OptionsText">{text}</div>;
}
