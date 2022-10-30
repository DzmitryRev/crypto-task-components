import React, { PropsWithChildren } from "react";
import StyledButton from "./StyledButton";

interface ButtonPropsType extends React.ComponentProps<"button"> {
  color: "blue" | "green" | "red";
  action?: () => void;
  disabled?: boolean;
}

function Button({
  color,
  action = () => {},
  disabled = false,
  children,
}: PropsWithChildren<ButtonPropsType>) {
  return (
    <StyledButton
      data-testid="button"
      color={color}
      onClick={() => {
        if (action) action();
      }}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  action: () => {},
  disabled: false,
};

export default Button;
