import React, { useState, useEffect } from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import Friend from "../Friend/Friend.js";
import Pagination from "../Pagination/Pagination";
import SearchFriend from "../SearchFriend/SearchFriend";
import "./styles.css";

const FriendsList = () => {
  const { friends, sort } = useFriends();

  const options = [
    { id: 1, val: "default", opt: "Default" },
    { id: 2, val: "createdAt", opt: "Recent friends" },
    { id: 3, val: "favorite", opt: "Favorite friends" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [currentOption, setCurrentOption] = useState(options[0]);
  const [friendsPerPage] = useState(4);
  const [searchResults, setSearchResults] = useState(friends);
  const [searchTerm, setSearchTerm] = useState("");

  const indexOfLastFriend = currentPage * friendsPerPage;
  const indexOfFirstFriend = indexOfLastFriend - friendsPerPage;
  const currentFriends = searchResults.slice(
    indexOfFirstFriend,
    indexOfLastFriend
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (friends.length > 4) {
      paginate(Math.ceil(friends.length / friendsPerPage));
    }
  }, [friends, friendsPerPage]);

  useEffect(() => {
    paginate(1);
  }, [currentOption, searchTerm]);

  useEffect(() => {
    const results = friends.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  }, [searchTerm, friends]);

  const onSort = (e) => {
    sort(e.target.value);
    setCurrentOption(e.target.value);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="search-container">
        <SearchFriend
          handleChange={handleChange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <select onChange={(e) => onSort(e)}>
          {options.map((opt) => (
            <option
              key={opt.id}
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
      </div>

      <ul className="friends-list">
        {friends.length > 0 ? (
          currentFriends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))
        ) : (
          <div className="no-friends">No friends yet</div>
        )}
      </ul>

      <Pagination
        friendsPerPage={friendsPerPage}
        totalFriends={searchResults.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default FriendsList;
