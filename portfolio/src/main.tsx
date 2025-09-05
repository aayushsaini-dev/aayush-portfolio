import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import ActiveSectionContextProvider from "./contexts/ActiveSectionContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ActiveSectionContextProvider>
      <App />
    </ActiveSectionContextProvider>
  </React.StrictMode>
);
