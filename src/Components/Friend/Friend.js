import React from "react";
import { useFriends } from "../../Contexts/FriendProvider";
import { AiOutlineStar, AiFillStar, AiTwotoneDelete } from "react-icons/ai";

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
      <span className="action" onClick={() => addToFavorites(id, !favorite)}>
        {favorite ? (
          <AiFillStar color="orange" size="1.25em" />
        ) : (
          <AiOutlineStar color="orange" size="1.25em" />
        )}
      </span>
      <span className="action" onClick={onDelete}>
        <AiTwotoneDelete color="crimson" size="1.25em" />
      </span>
    </li>
  );
}
