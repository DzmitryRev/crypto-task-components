import { fireEvent, render, screen } from '@testing-library/react';
import { Link, MemoryRouter } from 'react-router-dom';
import Button from '../Button';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import Variables from '../../../styles/variables';

test('Should render Button with "Hello" children', () => {
  render(
    <Button as="button" color="blue">
      Hello
    </Button>,
  );
  const helloButton = screen.getByTestId('button');
  expect(helloButton).toBeInTheDocument();
  expect(helloButton).toHaveTextContent('Hello');
  expect(helloButton).not.toHaveTextContent('World');
});

test('Should render green Button component', () => {
  render(
    <Button as="button" color="green">
      Hello
    </Button>,
  );
  const greenButton = screen.getByTestId('button');
  expect(greenButton).toHaveStyleRule('background-color', Variables.colors.green);
  expect(greenButton).not.toHaveStyleRule('background-color', Variables.colors.red);
  expect(greenButton).not.toHaveStyleRule('background-color', Variables.colors.blue);
});

test('Should render red Button component', () => {
  render(
    <Button as="button" to="aa" color="red">
      Hello
    </Button>,
  );
  const greenButton = screen.getByTestId('button');
  expect(greenButton).toHaveStyleRule('background-color', Variables.colors.red);
  expect(greenButton).not.toHaveStyleRule('background-color', Variables.colors.green);
  expect(greenButton).not.toHaveStyleRule('background-color', Variables.colors.blue);
});

test('Should render red Button as Link component', () => {
  const MOCK_PATH = '/helloWorld';
  render(
    <MemoryRouter>
      <Button as={Link} to={MOCK_PATH} color="red">
        Hello
      </Button>
    </MemoryRouter>,
  );
  const greenButton = screen.getByTestId('button');
  expect(greenButton).toHaveStyleRule('background-color', Variables.colors.red);
  expect(greenButton).toHaveAttribute('href', MOCK_PATH);
});

test('Should render blue Button component', () => {
  render(
    <Button as="button" color="blue">
      Hello
    </Button>,
  );
  const greenButton = screen.getByTestId('button');
  expect(greenButton).toHaveStyleRule('background-color', Variables.colors.blue);
  expect(greenButton).not.toHaveStyleRule('background-color', Variables.colors.green);
  expect(greenButton).not.toHaveStyleRule('background-color', Variables.colors.red);
});

test('Should render disbled Button component', () => {
  render(
    <Button as="button" color="red" disabled>
      Hello
    </Button>,
  );
  const greenButton = screen.getByTestId('button');
  expect(greenButton).toHaveAttribute('disabled');
});

test('Should render Button with action', () => {
  const handleClick = jest.fn();
  render(
    <Button
      as="button"
      color="red"
      onClick={() => {
        handleClick();
      }}
    >
      Hello
    </Button>,
  );
  const button = screen.getByTestId('button');
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalled();

  fireEvent.click(button);
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(3);
});
