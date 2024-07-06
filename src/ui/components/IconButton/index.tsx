import { TouchableOpacityProps } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../theme';
import { iconButtonStyle, StyledIconButton } from './styles';

interface IconButtonProps extends TouchableOpacityProps {
  iconName: string;
  variant?: 'outline' | 'primary';
}

const IconButton = ({
  iconName,
  onPress,
  testID,
  variant = 'primary',
}: IconButtonProps) => {
  return (
    <StyledIconButton
      onPress={onPress}
      style={iconButtonStyle.variant[variant]}
      testID={testID}
    >
      <Icon
        color={
          variant === 'outline'
            ? theme.colors.secondary
            : theme.colors.background
        }
        name={iconName}
        size={24}
      />
    </StyledIconButton>
  );
};

export default IconButton;
