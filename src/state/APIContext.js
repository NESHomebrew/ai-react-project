import React, { useContext, useState, useEffect } from "react";

const APIContext = React.createContext();

export function useAPI() {
  return useContext(APIContext);
}

export function APIProvider({ children }) {
  const [result, setResult] = useState("test result");

  useEffect(() => {
    setResult("updated result");
  }, []);

  const value = {
    result,
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
}
