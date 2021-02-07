import React from "react";
import { shallow } from "enzyme";
import Friend from "../Components/Friend/Friend";
import * as AppContext from "../Contexts/FriendProvider";

describe("render friend component", () => {
  it("should mock the context", () => {
    const contextValues = {
      friend: [
        {
          id: 1,
          name: "Yashasvi",
          favorite: false,
          createdAt: new Date(),
        },
      ],
      addToFavorites: jest.fn(),
      deleteFriend: jest.fn(),
    };
    const dummyFriend = {
      id: 1,
      name: "Yashasvi",
      favorite: false,
      createdAt: new Date(),
    };
    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(
      <Friend
        friend={dummyFriend}
        addToFavorites={contextValues.addToFavorites}
      />
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    const fav = wrapper.find("#add-fav");
    fav.simulate("click");
    expect(contextValues.addToFavorites).toBeCalledWith(1, true);

    global.confirm = () => true;

    const del = wrapper.find(".del");
    del.simulate("click");

    expect(contextValues.deleteFriend).toBeCalledWith(1);
  });
});
