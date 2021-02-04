import React, { useState } from "react";
import { useFriends } from "../../Contexts/FriendProvider";

const AddFriendForm = () => {
  const [friend, setFriend] = useState("");
  const { addFriend } = useFriends();

  const onSubmit = (e) => {
    e.preventDefault();
    addFriend(friend);
    setFriend("");
    console.log(e);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setFriend(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={friend}
        type="text"
        placeholder="Add a new friend"
        onChange={(e) => onChange(e)}
        required
      />
      <button>Add</button>
    </form>
  );
};

export default AddFriendForm;
