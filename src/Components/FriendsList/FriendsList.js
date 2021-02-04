import React from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import Friend from "../Friend/Friend.js";
import "./styles.css";
const FriendList = () => {
  const { friends } = useFriends();

  return (
    <ul className="friends-list">
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
