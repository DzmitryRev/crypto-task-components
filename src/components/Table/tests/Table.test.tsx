import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Table from "../Table";
import "@testing-library/jest-dom";

test("Should render Table component with head row", () => {
  render(<Table body={<tr></tr>} />);
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
  expect(table).toHaveTextContent("Name");
  expect(table).toHaveTextContent("Symbol");
  expect(table).toHaveTextContent("$");
  expect(table).toHaveTextContent("%");
});

test("Should render Table component with children", () => {
  render(
    <Table
      body={
        <tr>
          <td>body 1</td>
          <td>body 2</td>
          <td>body 3</td>
          <td>body 4</td>
        </tr>
      }
    />
  );
  const table = screen.getByTestId("table");
  expect(table).toBeInTheDocument();
  expect(table).toHaveTextContent("body 1");
  expect(table).toHaveTextContent("body 2");
  expect(table).toHaveTextContent("body 3");
});
