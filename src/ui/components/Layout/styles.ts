import styled from '@emotion/native';

interface LayoutProps {
  justify: 'center' | 'flex-end' | 'flex-start';
}

export const StyledLayout = styled.View<LayoutProps>`
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: ${({ justify }) => justify};
  flex: 1;
  padding: 0 24px;
`;
