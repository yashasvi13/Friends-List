import React from "react";
import { shallow } from "enzyme";
import FriendsList from "../Components/FriendsList/FriendsList";
import * as AppContext from "../Contexts/FriendProvider";

describe("render friendslist component", () => {
  test("it should mock the context", () => {
    const contextValues = { friends: [] };
    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    expect(shallow(<FriendsList />)).toMatchSnapshot();
  });
});
