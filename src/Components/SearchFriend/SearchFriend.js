import React from "react";
import "./styles.css";
const SearchFriend = ({ handleChange, searchTerm }) => {
  return (
    <div className="form">
      <input
        className="input"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFriend;
