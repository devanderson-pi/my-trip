import { StackNavigationOptions } from '@react-navigation/stack';

import IconButton from '../../ui/components/IconButton';
import theme from '../../ui/theme';

const navigatorScreenOptions: StackNavigationOptions = {
  headerLeft: ({ onPress }) => {
    return (
      <IconButton
        iconName="chevron-left"
        onPress={onPress}
        variant="outline"
      />
    );
  },
  headerLeftContainerStyle: {
    paddingLeft: 24,
  },
  headerRightContainerStyle: {
    paddingRight: 24,
  },
  headerShown: true,
  headerStyle: {
    backgroundColor: theme.colors.background,
    borderColor: 'transparent',
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.semibold,
    fontSize: 18,
    lineHeight: 28,
  },
};

export default navigatorScreenOptions;
