import React, { ComponentType, ElementType, JSXElementConstructor, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IntrinsicElementsKeys, StyledComponent } from "styled-components";
import StyledButton from "./StyledButton";

export interface ButtonPropsType {
  color: "blue" | "green" | "red";
  as: "button" | typeof Link;
}

function Button<T extends IntrinsicElementsKeys | JSXElementConstructor<any>>({
  color,
  as,
  children,
}: PropsWithChildren<ButtonPropsType & React.ComponentProps<T>>) {
  return (
    <StyledButton as={as} data-testid="button" color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
