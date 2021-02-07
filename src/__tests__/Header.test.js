import React from "react";
import { shallow } from "enzyme";
import Header from "../Components/Header/header";

describe("Header", () => {
  it("renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
