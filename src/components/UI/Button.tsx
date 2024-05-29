import { ComponentProps, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
}

const Button = ({
  variant,
  size,
  rounded,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StButton size={size} variant={variant} rounded={rounded} {...props}>
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button<ButtonProps>`
  border-radius: ${({ rounded }) => (rounded ? '20px' : '')};
  background-color: #9cb4d4;
  font-size: 20px;
  cursor: pointer;
  margin: 10px;
  border: none;
  height: 40px;
  width: 100px;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: #9cb4d4;
          font-size: 20px;
          cursor: pointer;
          margin: 10px;
          opacity: 0.6;
          border: none;
          height: 45px;
          width: 140px;
          border-radius: 20px;
        `;
      case 'secondary':
        return css`
          background-color: #fcba03;
          font-size: 20px;
          cursor: pointer;
          margin: 10px;
          opacity: 0.6;
          border: none;
          height: 40px;
          width: 100px;
          border-radius: 20px;
        `;
    }
  }}

  ${({ size }) => {
    switch (size) {
      case 'lg':
        return css`
          height: 50px;
          width: 200px;
        `;
      case 'md':
        return css`
          height: 45px;
          width: 130px;
        `;
      case 'sm':
        return css`
          height: 40px;
          width: 100px;
        `;
    }
  }}

  @media screen and (max-width: 768px) {
    color: aliceblue;
    width: 120px;
  }
`;
