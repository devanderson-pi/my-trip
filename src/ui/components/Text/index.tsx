import { TextProps as RNTextProps } from 'react-native';

import { StyledText, textStyle } from './styles';

interface TextProps extends RNTextProps {
  centerText?: boolean;
  color?: string;
  size?: 'xs' | 'sm' | 'base';
  weight?: 'medium' | 'semibold';
}

const Text = ({
  centerText,
  children,
  color,
  nativeID,
  size = 'base',
  weight,
}: TextProps) => {
  return (
    <StyledText
      centerText={centerText}
      color={color}
      nativeID={nativeID}
      style={[textStyle.size[size], weight && textStyle.weight[weight]]}
    >
      {children}
    </StyledText>
  );
};

export default Text;
