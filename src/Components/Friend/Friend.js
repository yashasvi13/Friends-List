import React from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import { AiOutlineStar, AiFillStar, AiFillDelete } from "react-icons/ai";

import "./styles.css";

export default function Friend({ friend }) {
  const { deleteFriend, addToFavorites } = useFriends();
  const { id, name, favorite } = friend;

  const onDelete = () => {
    if (window.confirm(`Is ${name} no longer your friend?`)) {
      deleteFriend(id);
    }
  };

  return (
    <li className="friend">
      <span className="name">{name}</span>
      <span
        data-testid="fav"
        className="action"
        onClick={() => addToFavorites(id, !favorite)}
      >
        {favorite ? (
          <AiFillStar color="#fcbf49" size="1.25em" />
        ) : (
          <AiOutlineStar color="#fcbf49" size="1.25em" />
        )}
      </span>
      <span data-testid="delete" className="action" onClick={onDelete}>
        <AiFillDelete color="#d62828" size="1.25em" />
      </span>
    </li>
  );
}
