import React, { PropsWithChildren } from "react";

export default function TableRow({ children }: PropsWithChildren<React.ComponentProps<"tr">>) {
  return <tr data-testid="table-row">{children}</tr>;
}
