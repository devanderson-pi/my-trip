import styled from '@emotion/native';

export const StyledInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.normal};
  font-size: 18px;
  height: 46px;
  padding: 0 16px;
`;
