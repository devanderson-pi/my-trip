import { TextProps } from 'react-native';

import { headingStyle, StyledHeading } from './styles';

interface HeadingProps extends TextProps {
  size?: 'base' | 'lg' | '3xl';
}

const Heading = ({ children, size = 'base', ...props }: HeadingProps) => {
  return (
    <StyledHeading
      style={headingStyle[size]}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};

export default Heading;
