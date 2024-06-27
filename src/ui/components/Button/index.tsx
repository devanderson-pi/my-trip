import { ReactElement } from 'react';
import { TouchableOpacityProps } from 'react-native';

import theme from '../../theme';
import {
  buttonStyle,
  StyledButton,
  StyledIconContainer,
  StyledLabel,
  textStyle,
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  color?: string;
  isLoading?: boolean;
  label?: {
    text: string;
    color?: string;
  }[];
  leftIcon?: ReactElement;
  loadingText?: string;
  size?: 'md' | 'lg';
  variant?: 'ghost' | 'outline' | 'primary';
}

const Button = ({
  children,
  color,
  disabled,
  isLoading = false,
  label = [],
  leftIcon,
  loadingText = 'Loading',
  size = 'lg',
  testID,
  variant = 'primary',
}: ButtonProps) => {
  const renderLabel = label.map((item, index, array) => {
    return (
      <StyledLabel
        color={item.color}
        disabled={disabled}
        key={index}
        style={textStyle.size[size]}
      >
        {item.text.concat(index === array.length - 1 ? '' : ' ')}
      </StyledLabel>
    );
  });

  const labelColor = variant !== 'primary' ? theme.colors.secondary : color;

  return (
    <StyledButton
      disabled={disabled}
      style={[buttonStyle.size[size], buttonStyle.variant[variant]]}
      testID={testID}
    >
      {leftIcon && <StyledIconContainer>{leftIcon}</StyledIconContainer>}

      {isLoading ? (
        <StyledLabel
          color={labelColor}
          disabled={disabled}
          style={textStyle.size[size]}
        >
          {loadingText || children}
        </StyledLabel>
      ) : (
        <>
          <StyledLabel
            color={labelColor}
            disabled={disabled}
            style={textStyle.size[size]}
          >
            {children}
          </StyledLabel>

          {label.length > 0 && renderLabel}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
