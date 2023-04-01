import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChatProvider } from "./state/ChatContext";
import { APIProvider } from "./state/APIContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChatProvider>
      <APIProvider>
        <App />
      </APIProvider>
    </ChatProvider>
  </React.StrictMode>
);
