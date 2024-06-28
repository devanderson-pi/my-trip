import styled, { css } from '@emotion/native';

import theme from '../../theme';

interface TextProps {
  centerText?: boolean;
  color?: string;
}

export const StyledText = styled.Text<TextProps>`
  color: ${({ color }) => color || theme.colors.text};
  font-family: ${theme.fonts.normal};

  ${({ centerText }) => centerText && 'text-align: center'}
`;

export const textStyle = {
  size: {
    xs: css`
      font-size: 12px;
      line-height: 16px;
    `,
    sm: css`
      font-size: 14px;
      line-height: 20px;
    `,
    base: css`
      font-size: 16px;
      line-height: 24px;
    `,
  },
  weight: {
    medium: css`
      font-family: ${theme.fonts.medium};
    `,
    semibold: css`
      font-family: ${theme.fonts.semibold};
    `,
  },
};
