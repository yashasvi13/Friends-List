import React from "react";
import { shallow } from "enzyme";
import FriendsList from "../Components/FriendsList/FriendsList";

describe("FriendsList", () => {
  it("renders", () => {
    expect(shallow(<FriendsList />)).toMatchSnapshot();
  });
});
