import { useState } from "react";
import After from "./after";
import Before from "./before";
import Options from "./options";
import Prompt from "./prompt";
import { useChat } from "../state/ChatContext";

export default function ScriptReader() {
  const { currentStep, mode, increment } = useChat();
  const [fade, setFade] = useState("in");

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function startFade() {
    setFade("out");
    await timeout(2000);
    increment();
    setFade("in");
  }

  return (
    <div style={{ color: "white", padding: "8px" }}>
      <Before text={currentStep.before} fade={fade} />
      <Prompt text={currentStep.prompt} />
      <After text={currentStep.after} fade={fade} />
      <Options text={currentStep.options} startFade={startFade} />
    </div>
  );
}
