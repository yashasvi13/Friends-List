import React from "react";
import { shallow } from "enzyme";
import Header from "../Components/Header/header";

describe("Header", () => {
  it("renders", () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
