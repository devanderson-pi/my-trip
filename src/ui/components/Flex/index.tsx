import { FlexAlignType, ViewProps } from 'react-native';

import { StyledFlex } from './styles';

interface FlexProps extends ViewProps {
  align?: FlexAlignType;
  direction?: 'column' | 'row';
  justify?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
  gap?: number;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const Flex = ({
  align = 'stretch',
  children,
  direction = 'column',
  gap,
  justify = 'flex-start',
  testID,
  wrap = 'nowrap',
}: FlexProps) => {
  return (
    <StyledFlex
      align={align}
      direction={direction}
      gap={gap}
      justify={justify}
      testID={testID}
      wrap={wrap}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
