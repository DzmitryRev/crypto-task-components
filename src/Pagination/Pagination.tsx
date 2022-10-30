import Button from "../Button/Button";
import { StyledPagination } from "./StyledPagination";
import React from "react";

interface PaginationPropsType extends React.ComponentProps<"div"> {
  currentOffset: number;
  setPage: (offset: number) => void;
}

function Pagination({ currentOffset, setPage }: PaginationPropsType) {
  return (
    <StyledPagination data-testid="pagination">
      <Button
        color="blue"
        onClick={() => {
          setPage(currentOffset - 50);
        }}
        disabled={!currentOffset}
      >
        {"<"}
      </Button>
      <Button
        color="blue"
        onClick={() => {
          setPage(currentOffset + 50);
        }}
      >
        {">"}
      </Button>
    </StyledPagination>
  );
}

export default Pagination;
