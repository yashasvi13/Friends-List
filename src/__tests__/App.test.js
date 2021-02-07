import React from "react";
import App from "../App";
import { render, screen } from "../custom-render";

describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    render(<App />);
    expect(screen.getByText(/My Friends/i)).toBeTruthy();
  });
});
// describe("App", () => {
//   it("renders without crashing", () => {
//     const contextValues = {};
//     jest
//       .spyOn(AppContext, "useFriends")
//       .mockImplementation(() => contextValues);
//     const wrapper = shallow(<App />);
//     expect(wrapper.exists()).toBe(true);
//     const div = document.createElement("div");

//     ReactDOM.render(wrapper, div);
//   });
// });
