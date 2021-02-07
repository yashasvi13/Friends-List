import React from "react";
import { shallow } from "enzyme";
import * as AppContext from "../Contexts/FriendProvider";
import Pagination from "../Components/Pagination/Pagination";

describe("render pagination component", () => {
  it("should mock the context", () => {
    const paginate = jest.fn();
    const contextValues = {};

    jest
      .spyOn(AppContext, "useFriends")
      .mockImplementation(() => contextValues);
    const wrapper = shallow(
      <Pagination
        friendsPerPage={4}
        totalFriends={6}
        currentPage={1}
        paginate={paginate}
      />
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    const page = wrapper.find(".page");
    page.simulate("click");

    expect(paginate).toBeCalledWith(2);
  });
});
