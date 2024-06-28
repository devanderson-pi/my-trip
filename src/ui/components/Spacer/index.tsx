import { ViewProps } from 'react-native';

import { StyledSpacer } from './styles';

interface SpacerProps extends ViewProps {
  size: number;
  direction?: 'horizontal' | 'vertical';
}

const Spacer = ({
  children,
  direction = 'vertical',
  size,
  testID,
}: SpacerProps) => {
  if (direction === 'horizontal') {
    return (
      <StyledSpacer
        testID={testID}
        width={size}
      >
        {children}
      </StyledSpacer>
    );
  }

  return (
    <StyledSpacer
      height={size}
      testID={testID}
    >
      {children}
    </StyledSpacer>
  );
};

export default Spacer;
