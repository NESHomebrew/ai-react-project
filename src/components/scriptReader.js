import { useState } from "react";
import After from "./after";
import Before from "./before";
import Options from "./options";
import Prompt from "./prompt";
import Input from "./input";
import Output from "./output";
import { useChat } from "../state/ChatContext";
import Next from "./next";
import Fade from "./fade";

export default function ScriptReader() {
  const { currentStep, mode, increment } = useChat();
  const [fade, setFade] = useState("in");

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function startFade(e) {
    e.preventDefault();

    setFade("out");
    await timeout(1000);
    increment();
    setFade("in");
    await timeout(1000);
  }

  return (
    <Fade transition={fade}>
      <div style={{ color: "white", padding: "8px" }}>
        <Before text={currentStep.before} />
        <Prompt text={currentStep.prompt} />
        <Output />
        <After text={currentStep.after} />
        {mode === "options" ? (
          <>
            <Input />
            <Options text={currentStep.options} />
          </>
        ) : (
          <Next startFade={startFade} />
        )}
      </div>
    </Fade>
  );
}
