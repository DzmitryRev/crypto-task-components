import React, { JSXElementConstructor, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IntrinsicElementsKeys } from "styled-components";
import StyledButton from "./StyledButton";

export interface ButtonPropsType<T> {
  color: "blue" | "green" | "red";
  as: T;
}

function Button<T extends IntrinsicElementsKeys | JSXElementConstructor<any>>({
  color,
  children,
  as,
}: PropsWithChildren<ButtonPropsType<T> & React.ComponentProps<T>>) {
  return (
    <StyledButton as={as} data-testid="button" color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
