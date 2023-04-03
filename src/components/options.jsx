import PropTypes from "prop-types";

Options.PropTypes = {
  text: PropTypes.string,
};

export default function Options() {
  const { text } = this.props;

  return <div className="OptionsText">{text}</div>;
}
