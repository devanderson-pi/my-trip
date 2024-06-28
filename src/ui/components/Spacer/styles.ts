import styled from '@emotion/native';

interface SpacerProps {
  height?: number;
  width?: number;
}

export const StyledSpacer = styled.View<SpacerProps>`
  ${({ height }) => height && `height: ${height}px`}
  ${({ width }) => width && `width: ${width}px`}
`;
