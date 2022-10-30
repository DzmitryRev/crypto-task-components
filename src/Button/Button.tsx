import React, { PropsWithChildren } from "react";
import StyledButton from "./StyledButton";

interface ButtonPropsType extends React.ComponentProps<"button"> {
  color: "blue" | "green" | "red";
}

function Button({ color, children }: PropsWithChildren<ButtonPropsType>) {
  return (
    <StyledButton data-testid="button" color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
