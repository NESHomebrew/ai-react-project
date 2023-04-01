import "./fade.css";

export default function Fade(props) {
  return (
    <div className={`fade-${props.transition}-text`}>{props?.children}</div>
  );
}
