import styled from '@emotion/native';

export const StyledCard = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
`;
