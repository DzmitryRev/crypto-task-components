import React from "react";
import Button from "../Button/Button";
import { StyledPagination } from "./StyledPagination";

interface PaginationPropsType extends React.ComponentProps<"div"> {
  currentOffset: number;
  setPage: (offset: number) => void;
}

function Pagination({ currentOffset, setPage }: PaginationPropsType) {
  return (
    <StyledPagination data-testid="pagination">
      <Button
        as="button"
        color="blue"
        onClick={() => {
          setPage(currentOffset - 50);
        }}
        disabled={!currentOffset}
      >
        {"<"}
      </Button>
      <Button
        as="button"
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
