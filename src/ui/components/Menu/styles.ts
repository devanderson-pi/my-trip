import styled, { css } from '@emotion/native';

import theme from '../../theme';

interface MenuProps {
  position: {
    right: number;
    top: number;
  };
}

export const StyledMenu = styled.View<MenuProps>`
  background-color: ${props => props.theme.colors.white};
  border-color: ${props => props.theme.colors.tertiary};
  border-radius: 16px;
  border-style: solid;
  border-width: 1px;
  padding: 0 24px;
  position: absolute;
  right: ${({ position }) => position.right + 'px'};
  top: ${({ position }) => position.top + 'px'};
`;

export const StyledMenuItem = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  gap: 18px;
  padding: 24px 0;
`;

export const menuItemStyle = css`
  border-bottom-color: ${theme.colors.tertiary};
  border-bottom-width: 1px;
`;

export const safeAreaViewStyle = css`
  flex: 1;
`;
