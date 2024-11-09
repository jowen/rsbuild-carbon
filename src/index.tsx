import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Button } from "@carbon/react";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Button>Carbon button</Button>
    </React.StrictMode>
  );
}
