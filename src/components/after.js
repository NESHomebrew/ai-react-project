import Fade from "./fade";

export default function After({ text, fade }) {
  return (
    <div className="AfterText">
      <Fade transition={fade}>{text}</Fade>
    </div>
  );
}
