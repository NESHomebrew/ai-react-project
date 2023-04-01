import Fade from "./fade";

export default function Next({ startFade }) {
  return (
    <button type="button" onClick={(e) => startFade(e)}>
      Next
    </button>
  );
}
