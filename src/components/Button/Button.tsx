import React, { JSXElementConstructor, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IntrinsicElementsKeys } from 'styled-components';
import StyledButton from './StyledButton';

type AttributesType = IntrinsicElementsKeys | JSXElementConstructor<any>;
type AsType = 'button' | typeof Link;

export interface ButtonPropsType {
  color: 'blue' | 'green' | 'red';
  as: AsType;
}

function Button<T extends AsType & AttributesType = 'button'>({
  as,
  color,
  children,
  ...attributes
}: PropsWithChildren<ButtonPropsType & React.ComponentProps<T>>) {
  return (
    <StyledButton as={as} {...attributes} color={color} data-testid="button">
      {children}
    </StyledButton>
  );
}

export default Button;
