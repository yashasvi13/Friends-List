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
        createdAt: new Date(),
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

  const sort = (e) => {
    e === "default"
      ? setFriends([...friends].sort((a, b) => a.createdAt - b.createdAt))
      : setFriends([...friends].sort((a, b) => b[e] - a[e]));
  };

  return (
    <FriendContext.Provider
      value={{
        friends,
        addFriend,
        deleteFriend,
        addToFavorites,
        sort,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
}
