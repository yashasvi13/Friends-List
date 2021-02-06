import React from "react";
import { shallow } from "enzyme";
import Friend from "../Components/Friend/Friend";

describe("Friend", () => {
  it("renders", () => {
    expect(shallow(<Friend />)).toMatchSnapshot();
  });
});
