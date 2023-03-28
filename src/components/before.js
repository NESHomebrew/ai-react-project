import Fade from "./fade";

export default function Before({ text, fade }) {
  return (
    <div className="BeforeText">
      <Fade transition={fade}>{text}</Fade>
    </div>
  );
}
