import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const FriendContext = createContext();
export const useFriends = () => useContext(FriendContext);

export default function FriendProvider({ children }) {
  const [friends, setFriends] = useState([]);

  const addFriend = (name) =>
    setFriends([
      ...friends,
      {
        id: v4(),
        name,
        favorite: false,
      },
    ]);
  const deleteFriend = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };
  const addToFavorites = (id, status) => {
    setFriends(
      friends.map((f) => (f.id === id ? { ...f, favorite: status } : f))
    );
  };

  return (
    <FriendContext.Provider
      value={{ friends, addFriend, deleteFriend, addToFavorites }}
    >
      {children}
    </FriendContext.Provider>
  );
}
