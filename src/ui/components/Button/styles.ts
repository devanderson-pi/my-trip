import styled, { css } from '@emotion/native';

import theme from '../../theme';

interface ButtonProps {
  isLoading?: boolean;
}

interface LabelProps {
  color?: string;
  isLoading?: boolean;
}

export const StyledButton = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  opacity: ${({ disabled, isLoading }) => disabled && !isLoading && '0.63'};
`;

export const StyledIconContainer = styled.View`
  margin-right: 18px;
`;

export const StyledLabel = styled.Text<LabelProps>`
  color: ${props => props.color || theme.colors.background};
  font-family: ${theme.fonts.medium};
  opacity: ${({ disabled, isLoading }) => disabled && !isLoading && '0.63'};
`;

export const buttonStyle = {
  size: {
    md: css`
      height: 40px;
    `,
    lg: css`
      height: 48px;
    `,
  },
  variant: {
    ghost: css`
      background-color: transparent;
    `,
    outline: css`
      background-color: transparent;
      border-color: ${theme.colors.secondary};
      border-style: solid;
      border-width: 1px;
    `,
    primary: css`
      background-color: ${theme.colors.primary};
    `,
  },
};

export const textStyle = {
  size: {
    md: css`
      font-size: 16px;
      line-height: 24px;
    `,
    lg: css`
      font-size: 18px;
      line-height: 28px;
    `,
  },
};
