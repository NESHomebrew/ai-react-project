import Fade from "./fade";

export default function Again({ text, fade }) {
  <div className="AgainText">
    <Fade transition={fade}>{text}</Fade>
  </div>;
}
