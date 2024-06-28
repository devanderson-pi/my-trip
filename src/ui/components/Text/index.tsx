import { PropsWithChildren } from 'react';

import { StyledText, textStyle } from './styles';

interface TextProps extends PropsWithChildren {
  centerText?: boolean;
  color?: string;
  size?: 'xs' | 'sm' | 'base';
  weight?: 'medium' | 'semibold';
}

const Text = ({
  centerText,
  children,
  color,
  size = 'base',
  weight,
}: TextProps) => {
  return (
    <StyledText
      centerText={centerText}
      color={color}
      style={[textStyle.size[size], weight && textStyle.weight[weight]]}
    >
      {children}
    </StyledText>
  );
};

export default Text;
