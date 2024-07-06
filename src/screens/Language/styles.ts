import styled from '@emotion/native';

export const StyledMenuButtonContainer = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.tertiary};
  border-bottom-width: 1px;
`;

export const StyledMenuButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 0;
`;
