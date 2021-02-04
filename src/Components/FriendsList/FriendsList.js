import React from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import Friend from "../Friend/Friend.js";
const FriendList = () => {
  const { friends } = useFriends();
  debugger;
  return (
    <div>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default FriendList;
