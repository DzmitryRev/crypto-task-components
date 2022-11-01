import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { StyledComponent } from "styled-components";
import StyledButton from "./StyledButton";

export interface ButtonPropsType
  extends React.ComponentProps<StyledComponent<"button", any, {}, never>> {
  color: "blue" | "green" | "red";
  as: "button" | typeof Link;
}

function Button({ as, color, children, ...rest }: PropsWithChildren<ButtonPropsType>) {
  return (
    <StyledButton as={as} {...rest} color={color} data-testid="button">
      {children}
    </StyledButton>
  );
}

export default Button;
