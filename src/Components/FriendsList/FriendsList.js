import React, { useState, useEffect } from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import Friend from "../Friend/Friend.js";
import Pagination from "../Pagination/Pagination";
import SearchFriend from "../SearchFriend/SearchFriend";
import "./styles.css";

const FriendsList = () => {
  const { friends = [], sort } = useFriends();

  const options = [
    { id: 1, val: "default", opt: "Old - New" },
    { id: 2, val: "createdAt", opt: "New - Old" },
    { id: 3, val: "favorite", opt: "Favorite" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [currentOption, setCurrentOption] = useState(options[0].val);
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
    setSearchTerm("");
  }, [friends, friendsPerPage]);

  useEffect(() => {
    if (searchTerm !== "") {
      paginate(1);
    }
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

        <select
          name="sort"
          className={!friends.length ? "disabled" : null}
          onChange={(e) => onSort(e)}
          disabled={!friends.length}
        >
          {options.map((opt) => (
            <option
              key={opt.id}
              defaultValue={opt.val === "default"}
              value={opt.val}
              disabled={
                opt.val === "favorite" &&
                !friends.filter((e) => e.favorite === true).length
              }
            >
              {currentOption === opt.val ? `Sorted by ${opt.opt}` : opt.opt}
            </option>
          ))}
        </select>
      </div>

      <ul className="friends-list">
        {searchResults.length > 0 ? (
          currentFriends.map((friend) => (
            <Friend key={friend.id} friend={friend} />
          ))
        ) : (
          <div className="no-friends">No friends found</div>
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
