import { useState } from "react";
import After from "./after";
import Before from "./before";
import Options from "./options";
import Prompt from "./prompt";
import script from "../script/script.json";

export default function ScriptReader({
  index,
  setMode,
  setIndex,
  handleClick,
  setValue,
}) {
  const [fade, setFade] = useState("in");

  var object = script[index];
  if (object.hasOwnProperty("options")) {
    setMode("input");
  } else {
    setMode("");
  }

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div style={{ color: "white", padding: "8px" }}>
      {object.hasOwnProperty("before") && (
        <Before text={object.before} fade={fade} />
      )}
      {object.hasOwnProperty("prompt") && (
        <Prompt
          text={object.prompt}
          handleClick={handleClick}
          setValue={setValue}
        />
      )}
      {object.hasOwnProperty("after") && (
        <After text={object.after} fade={fade} />
      )}
      {object.hasOwnProperty("options") ? (
        <>
          <button type="button" onClick={() => setIndex(0)}>
            Start Over
          </button>
          <Options text={object.options} />
        </>
      ) : (
        <button
          type="button"
          onClick={async () => {
            setFade("out");
            await timeout(2000);
            setIndex(index + 1);
            setFade("in");
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}
