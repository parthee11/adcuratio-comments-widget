import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CommentsProvider } from "./context/CommentsContext.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </React.StrictMode>
);
