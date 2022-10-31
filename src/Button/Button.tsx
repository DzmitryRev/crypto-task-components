import React, { ComponentType, ElementType, JSXElementConstructor, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { IntrinsicElementsKeys, StyledComponent } from "styled-components";
import StyledButton from "./StyledButton";

export interface ButtonPropsType
  extends React.ComponentProps<StyledComponent<"button", any, {}, never>> {
  color: "blue" | "green" | "red";
}

function Button({ as, children, color }: PropsWithChildren<ButtonPropsType>) {
  return (
    <StyledButton as={as} color={color} data-testid="button">
      {children}
    </StyledButton>
  );
}

export default Button;
