import React, { useContext, useState, useEffect } from "react";
import script from "../script/script.json";
import PropTypes from "prop-types";

ChatProvider.propTypes = {
  props: PropTypes.any,
  children: PropTypes.node,
};

const ChatContext = React.createContext();

export function useChat() {
  return useContext(ChatContext);
}

export function ChatProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState("default");
  const [currentStep, setStep] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setStep(script[index]);
  }, [index]);

  useEffect(() => {
    setLoading(false);
    const object = currentStep;
    if (object.options) {
      setMode("options");
    } else if (object.again) {
      setMode("again");
      // } else if (index === 0) {
      //   setMode("start");
    } else {
      setMode("default");
    }
  }, [currentStep]);

  function increment() {
    setIndex(index + 1);
  }

  function restart() {
    setIndex(0);
  }

  const value = {
    index,
    increment,
    restart,
    mode,
    currentStep,
  };

  return (
    <ChatContext.Provider value={value}>
      {!loading && children}
    </ChatContext.Provider>
  );
}
