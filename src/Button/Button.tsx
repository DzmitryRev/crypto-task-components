import React, { PropsWithChildren } from "react";
import StyledButton from "./StyledButton";

interface ButtonPropsType extends React.ComponentProps<typeof StyledButton> {
  color: "blue" | "green" | "red";
}

function Button({ color, children, as }: PropsWithChildren<ButtonPropsType>) {
  return (
    <StyledButton as={as} data-testid="button" color={color}>
      {children}
    </StyledButton>
  );
}

export default Button;
