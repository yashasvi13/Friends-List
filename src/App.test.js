import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FriendProvider from "./Contexts/FriendProvider";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <FriendProvider>
      <App />
    </FriendProvider>,
    div
  );
});
