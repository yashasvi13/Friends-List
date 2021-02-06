import React from "react";
import { shallow } from "enzyme";
import AddFriendForm from "../Components/AddFriendForm/AddFriendForm";
import * as AppContext from "../Contexts/FriendProvider";

describe("render AddFriendForm component", () => {
  test("it should mock the context", () => {
    const contextValues = {};

    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    expect(shallow(<AddFriendForm />)).toMatchSnapshot();
  });
});
