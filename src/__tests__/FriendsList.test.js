import React from "react";
import { shallow } from "enzyme";
import FriendsList from "../Components/FriendsList/FriendsList";
import * as AppContext from "../Contexts/FriendProvider";
import { v4 } from "uuid";

describe("render friendslist component", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);
  it("should mock the context", () => {
    const contextValues = {
      friends: [
        {
          id: v4(),
          name: "Rachel",
          favorite: false,
          createdAt: new Date(),
        },
        {
          id: v4(),
          name: "Phoebe",
          favorite: true,
          createdAt: new Date(),
        },
        {
          id: v4(),
          name: "Joey",
          favorite: false,
          createdAt: new Date(),
        },
        {
          id: v4(),
          name: "Monica",
          favorite: false,
          createdAt: new Date(),
        },
      ],
    };
    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    expect(shallow(<FriendsList />)).toMatchSnapshot();

    const wrapper = shallow(<FriendsList />);
    expect(wrapper.find("Friend").length).toEqual(4);

    expect(wrapper.find("select option").length).toEqual(3);
  });
});
