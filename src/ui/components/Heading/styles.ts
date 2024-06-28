import styled, { css } from '@emotion/native';

export const StyledHeading = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const headingStyle = {
  base: css`
    font-size: 16px;
    line-height: 24px;
  `,
  lg: css`
    font-size: 18px;
    line-height: 28px;
  `,
  '3xl': css`
    font-size: 30px;
    line-height: 36px;
  `,
};
