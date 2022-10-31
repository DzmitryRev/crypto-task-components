import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import StyledButton from "../Button/StyledButton";

interface ButtonLinkPropsType extends React.ComponentProps<typeof Link> {
  color: "blue" | "green" | "red";
}

function ButtonLink({ color, to, children }: PropsWithChildren<ButtonLinkPropsType>) {
  return (
    // <StyledButton as={Link} data-testid="link" to={to} color={color}>
    //   {children}
    // </StyledButton>
    <Link to={to}>{children}</Link>
  );
}

export default ButtonLink;
