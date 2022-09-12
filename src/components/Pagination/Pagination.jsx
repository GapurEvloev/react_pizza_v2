import React from "react";
import ReactPaginate from "react-paginate";
import classNames from "classnames";

import styles from "./style.module.scss";

const Pagination = ({ currentPage, setCurrentPage, isLoading }) => {
  return (
    <ReactPaginate
      className={classNames(styles.root, isLoading && styles.disabled)}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
