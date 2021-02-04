import React, { useState, useEffect } from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import Friend from "../Friend/Friend.js";
import Pagination from "../Pagination/Pagination";
import "./styles.css";

const FriendList = () => {
  const { friends, sort } = useFriends();

  const options = [
    { val: "default", opt: "Default" },
    { val: "createdAt", opt: "Recent friends" },
    { val: "favorite", opt: "Favorite friends" },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOption, setCurrentOption] = useState(options[0]);
  const [friendsPerPage] = useState(4);

  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = friends.slice(indexOfFirstFriend, indexOfLastFriend);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (friends.length > 4) {
      paginate(Math.ceil(friends.length / friendsPerPage));
    }
  }, [friends, friendsPerPage]);

  useEffect(() => {
    paginate(1);
  }, [currentOption]);

  const onSort = (e) => {
    sort(e.target.value);
    setCurrentOption(e.target.value);
  };
  return (
    <>
      <select onChange={(e) => onSort(e)}>
        {options.map((opt) => (
          <option
            value={opt.val}
            disabled={
              opt.val === "favorite" &&
              !friends.filter((e) => e.favorite === true).length
            }
          >
            {opt.opt}
          </option>
        ))}
      </select>
      <ul className="friends-list">
        {friends.length > 0 ? (
          currentFriends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))
        ) : (
          <div className="no-friends">
            You don't have any friend, go out and socialize!
          </div>
        )}
      </ul>
      <Pagination
        friendsPerPage={friendsPerPage}
        totalFriends={friends.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default FriendList;
