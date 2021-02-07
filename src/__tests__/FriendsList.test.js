import React from "react";
import { shallow } from "enzyme";
import FriendsList from "../Components/FriendsList/FriendsList";
import * as AppContext from "../Contexts/FriendProvider";

describe("render friendslist component", () => {
  it("should mock the context", () => {
    const contextValues = { friends: [] };
    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    expect(shallow(<FriendsList />)).toMatchSnapshot();

    const wrapper = shallow(<FriendsList />);
    expect(wrapper.find("ul div").text()).toEqual("No friends yet");
  });
});
