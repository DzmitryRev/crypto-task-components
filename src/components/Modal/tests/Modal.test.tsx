import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "jest-styled-components";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Modal from "../Modal";

test("Should render default Modal component (width 560px)", () => {
  render(
    <BrowserRouter>
      <Modal type="regular">Hi</Modal>
    </BrowserRouter>
  );
  const modal = screen.getByTestId("modal");
  expect(modal).toHaveStyleRule("width", "560px");
});

test("Should render minify Modal component (width 320px)", () => {
  render(
    <BrowserRouter>
      <Modal type="minified">Hi</Modal>
    </BrowserRouter>
  );
  const modal = screen.getByTestId("modal");
  expect(modal).toHaveStyleRule("width", "320px");
});

test("Should render Modal component with 'Hello' children", () => {
  render(
    <BrowserRouter>
      <Modal type="minified">Hello</Modal>
    </BrowserRouter>
  );
  const modal = screen.getByTestId("modal");
  expect(modal).toBeInTheDocument();
  expect(modal).toHaveTextContent("Hello");
});

test("Should render Modal component with closeModalExtraCallback prop", () => {
  const handleClick = jest.fn();
  render(
    <BrowserRouter>
      <Modal type="minified" closeModalExtraCallback={handleClick}>
        Hello
      </Modal>
    </BrowserRouter>
  );
  const modalShadow = screen.getByTestId("modal-shadow");
  expect(modalShadow).toBeInTheDocument();
  fireEvent.click(modalShadow);
  expect(handleClick).toBeCalled();
});
