import { Pagination } from "@mui/material";
import React from "react";

function PaginationBar({ page, setPage, totalPage }) {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Pagination
      count={totalPage}
      page={page}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
}

export default PaginationBar;
