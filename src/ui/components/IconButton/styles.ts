import styled, { css } from '@emotion/native';

import theme from '../../theme';

export const StyledIconButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: 6px;
  height: 48px;
  justify-content: center;
  width: 48px;
`;

export const iconButtonStyle = {
  variant: {
    outline: css`
      background-color: transparent;
      border-color: ${theme.colors.tertiary};
      border-style: solid;
      border-width: 1px;
    `,
    primary: css`
      background-color: ${theme.colors.primary};
    `,
  },
};
