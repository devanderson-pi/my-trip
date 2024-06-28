import styled from '@emotion/native';
import { FlexAlignType } from 'react-native';

interface FlexProps {
  align: FlexAlignType;
  direction: 'column' | 'row';
  justify:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
}

export const StyledFlex = styled.View<FlexProps>`
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};

  ${({ gap }) => gap && `gap: ${gap}px`}
`;
