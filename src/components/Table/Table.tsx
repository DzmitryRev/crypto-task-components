import React, { ReactNode } from "react";
import Variables from "../../styles/variables";
import TableRow from "../TableRow/TableRow";
import { StyledTable, StyledTableCell } from "./StyledTable";

interface TablePropsType extends React.ComponentProps<"table"> {
  body: ReactNode;
}

function Table({ body }: TablePropsType) {
  return (
    <StyledTable data-testid="table">
      <thead>
        <TableRow>
          <StyledTableCell as="th">Name</StyledTableCell>
          <StyledTableCell as="th" breakpoint={Variables.bp.l}>
            Symbol
          </StyledTableCell>
          <StyledTableCell as="th" breakpoint={Variables.bp.m}>
            $
          </StyledTableCell>
          <StyledTableCell as="th">%</StyledTableCell>
        </TableRow>
      </thead>
      <tbody>{body}</tbody>
    </StyledTable>
  );
}

export default Table;
