import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import TableRow from "../TableRow/TableRow";
import { StyledTableCell } from "../Table/StyledTable";
import Table from "../Table/Table";
import Variables from "../styles/variables";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  head: (
    <TableRow>
      <StyledTableCell>Head cell 1</StyledTableCell>
      <StyledTableCell breakpoint={Variables.bp.l}>Head cell 2</StyledTableCell>
      <StyledTableCell breakpoint={Variables.bp.m}>Head cell 3</StyledTableCell>
      <StyledTableCell breakpoint={Variables.bp.s}>Head cell 4</StyledTableCell>
    </TableRow>
  ),
  body: (
    <>
      <TableRow>
        <StyledTableCell>Cell 1</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.l}>Body cell 2</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.m}>Body cell 3</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.s}>Body cell 4</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Cell 1</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.l}>Body cell 2</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.m}>Body cell 3</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.s}>Body cell 4</StyledTableCell>
      </TableRow>
      <TableRow>
        <StyledTableCell>Cell 1</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.l}>Body cell 2</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.m}>Body cell 3</StyledTableCell>
        <StyledTableCell breakpoint={Variables.bp.s}>Body cell 4</StyledTableCell>
      </TableRow>
    </>
  ),
};
