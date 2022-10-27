import { render, screen } from '@testing-library/react';
import React from "react";
import 'jest-styled-components';
import Loading from '../Loading';

test('Should render Loading component', () => {
  render(
    <Loading />,
  );
  const loading = screen.getByTestId('loading');
  expect(loading).toBeInTheDocument();
});
