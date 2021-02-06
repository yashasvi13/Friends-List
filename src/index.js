import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FriendProvider from "./Contexts/FriendProvider";

ReactDOM.render(
  <FriendProvider>
    <App />
  </FriendProvider>,
  document.getElementById("root")
);
