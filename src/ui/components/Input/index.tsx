import { KeyboardTypeOptions, TextInputProps } from 'react-native';

import theme from '../../theme';
import { StyledInput } from './styles';

interface InputProps extends TextInputProps {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  onChange?: () => void;
  type?: KeyboardTypeOptions;
}

const Input = ({
  accessibilityLabel,
  autoCapitalize = 'sentences',
  onChange,
  secureTextEntry = false,
  type = 'default',
  value,
}: InputProps) => {
  return (
    <StyledInput
      accessibilityLabel={accessibilityLabel}
      autoCapitalize={autoCapitalize}
      keyboardType={type}
      onChangeText={onChange}
      placeholderTextColor={theme.colors.text}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  );
};

export default Input;
