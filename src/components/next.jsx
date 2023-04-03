import PropTypes from "prop-types";

Next.PropTypes = {
  startFade: PropTypes.func,
};

export default function Next() {
  const { startFade } = this.props;
  return (
    <button type="button" onClick={(e) => startFade(e)}>
      Next
    </button>
  );
}
