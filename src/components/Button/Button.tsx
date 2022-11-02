import React, { JSXElementConstructor, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IntrinsicElementsKeys } from 'styled-components';
import StyledButton from './StyledButton';

export interface ButtonPropsType<T> {
  color: 'blue' | 'green' | 'red';
  as: T;
}

type AsPropType = (IntrinsicElementsKeys | JSXElementConstructor<any>) & ('button' | typeof Link);

function Button<T extends AsPropType>({
  as,
  color,
  children,
  ...rest
}: PropsWithChildren<ButtonPropsType<T> & React.ComponentProps<T>>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledButton as={as} {...rest} color={color} data-testid="button">
      {children}
    </StyledButton>
  );
}

export default Button;
