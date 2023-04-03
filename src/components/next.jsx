import PropTypes from "prop-types";

Next.propTypes = {
  props: PropTypes.any,
  startFade: PropTypes.func,
};

export default function Next({ startFade }) {
  return (
    <button type="button" onClick={(e) => startFade(e)}>
      Next
    </button>
  );
}
