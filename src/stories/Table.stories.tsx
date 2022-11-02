import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableRow from '../components/TableRow/TableRow';
import { StyledTableCell } from '../components/Table/StyledTable';
import Table from '../components/Table/Table';
import Variables from '../styles/variables';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
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
