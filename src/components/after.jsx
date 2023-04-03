import PropTypes from "prop-types";

export default function After() {
  const { text } = this.props;
  return <div className="AfterText">{text}</div>;
}

After.PropTypes = {
  text: PropTypes.string,
};
