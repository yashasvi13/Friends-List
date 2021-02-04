import React, { useState } from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import "./styles.css";

const AddFriendForm = () => {
  const [friend, setFriend] = useState("");
  const { addFriend } = useFriends();

  const onSubmit = (e) => {
    e.preventDefault();
    addFriend(friend);
    setFriend("");
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setFriend(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        className="input"
        value={friend}
        type="text"
        placeholder="Add a new friend"
        onChange={(e) => onChange(e)}
        required
      />
      <button className="add-friend">Add</button>
    </form>
  );
};

export default AddFriendForm;
