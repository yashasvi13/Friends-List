import React from "react";
import { shallow } from "enzyme";
import Friend from "../Components/Friend/Friend";
import * as AppContext from "../Contexts/FriendProvider";

describe("render friend component", () => {
  it("should mock the context", () => {
    const contextValues = {};
    const dummyFriend = {
      id: 1,
      name: "Yashasvi",
      favorite: false,
      createdAt: new Date(),
    };
    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(<Friend friend={dummyFriend} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
