import { KeyboardTypeOptions, TextInputProps } from 'react-native';

import theme from '../../theme';
import { StyledInput } from './styles';

interface InputProps extends TextInputProps {
  onChange?: () => void;
  type?: KeyboardTypeOptions;
}

const Input = ({
  accessibilityLabel,
  onChange,
  secureTextEntry = false,
  type = 'default',
  value,
}: InputProps) => {
  return (
    <StyledInput
      accessibilityLabel={accessibilityLabel}
      keyboardType={type}
      onChangeText={onChange}
      placeholderTextColor={theme.colors.text}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
};

export default Input;
