import React from "react";
import "./styles.css";

const Pagination = ({
  friendsPerPage,
  totalFriends,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalFriends / friendsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    totalFriends > 4 && (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={number === currentPage ? "current-page" : "page"}
            >
              <span>{number}</span>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default Pagination;
