import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const FriendContext = createContext();

export const useFriends = () => useContext(FriendContext);

export default function FriendProvider({ children }) {
  const dummyFriends = [
    {
      id: v4(),
      name: "Rachel",
      favorite: false,
      createdAt: new Date(),
    },
    {
      id: v4(),
      name: "Phoebe",
      favorite: true,
      createdAt: new Date(),
    },
    {
      id: v4(),
      name: "Joey",
      favorite: false,
      createdAt: new Date(),
    },
    {
      id: v4(),
      name: "Chandler",
      favorite: true,
      createdAt: new Date(),
    },
    {
      id: v4(),
      name: "Monica",
      favorite: false,
      createdAt: new Date(),
    },
    {
      id: v4(),
      name: "Ross",
      favorite: false,
      createdAt: new Date(),
    },
  ];
  const [friends, setFriends] = useState(dummyFriends);

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
