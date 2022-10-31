import React, { ComponentType, ElementType, JSXElementConstructor, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IntrinsicElementsKeys, StyledComponent } from "styled-components";
import StyledButton from "./StyledButton";

export interface ButtonPropsType extends React.ComponentProps<"button"> {
  color: "blue" | "green" | "red";
}

function Button({ children }: PropsWithChildren<ButtonPropsType>) {
  return <StyledButton data-testid="button">{children}</StyledButton>;
}

export default Button;
