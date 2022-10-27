import React, { ReactNode } from "react";

type TableRowProps = {
  children?: ReactNode | undefined;
};

export default function TableRow({ children }: TableRowProps) {
  return <tr data-testid="table-row">{children}</tr>;
}
