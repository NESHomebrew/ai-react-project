import "./fade.css";

export default function Fade(props) {
  return (
    <div className={`fade-${props.transition}-text`}>
      <p>{props?.children}</p>
    </div>
  );
}
