import Fade from "./fade";

export default function Next({ fade, startFade }) {
  return (
    <button type="button" onClick={startFade}>
      Next
    </button>
  );
}
