import { Modal, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../theme';
import Text from '../Text';
import {
  menuItemStyle,
  safeAreaViewStyle,
  StyledMenu,
  StyledMenuItem,
} from './styles';

export interface MenuItem {
  action: () => void;
  icon: string;
  text: string;
  color?: string;
}

export interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  options: MenuItem[];
  position: {
    right: number;
    top: number;
  };
}

const Menu = ({ isOpen, onClose, options, position }: MenuProps) => {
  return (
    <Modal
      transparent
      visible={isOpen}
    >
      <SafeAreaView
        onTouchEnd={onClose}
        style={safeAreaViewStyle}
      >
        <StyledMenu position={position}>
          {options.map((option, index, array) => {
            return (
              <StyledMenuItem
                key={index}
                onPress={option.action}
                style={index !== array.length - 1 && menuItemStyle}
              >
                <Icon
                  color={option.color ?? theme.colors.secondary}
                  name={option.icon}
                  size={24}
                />

                <Text
                  color={option.color ?? theme.colors.secondary}
                  weight="medium"
                >
                  {option.text}
                </Text>
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
      </SafeAreaView>
    </Modal>
  );
};

export default Menu;
