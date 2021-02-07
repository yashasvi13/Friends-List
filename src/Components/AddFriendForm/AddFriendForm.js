import React, { useState, useRef, useEffect } from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import "./styles.css";

const AddFriendForm = () => {
  const [friend, setFriend] = useState("");
  const { addFriend } = useFriends();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    addFriend(friend);
    setFriend("");
  };

  const onChange = (e) => {
    setFriend(e.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="stretch">
        <input
          ref={inputRef}
          className="add"
          value={friend}
          type="text"
          placeholder="Add a new friend"
          onChange={(e) => onChange(e)}
          required
        />
      </div>
    </form>
  );
};

export default AddFriendForm;
