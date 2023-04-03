import PropTypes from "prop-types";

Before.propTypes = {
  text: PropTypes.string,
};

export default function Before({ text }) {
  return <div className="BeforeText">{text}</div>;
}
