import React from "react";
import ReactPaginate from "react-paginate";
import classNames from "classnames";

import styles from "./style.module.scss";

type PaginationProps = {
  currentPage: number;
  isLoading: string;
  setCurrentPage: any;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  isLoading,
}) => {
  return (
    <ReactPaginate
      className={classNames(
        styles.root,
        isLoading === "loading" && styles.disabled
      )}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="<"
    />
  );
};

export default Pagination;
