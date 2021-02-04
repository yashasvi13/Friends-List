import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import FriendProvider from "./Contexts/FriendProvider";

ReactDOM.render(
  <FriendProvider>
    <App />
  </FriendProvider>,
  document.getElementById("root")
);

// reportWebVitals();
