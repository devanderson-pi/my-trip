import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../ui/theme';
import { HomeTabParamList } from '../types';

const tabScreenOptions:
  | BottomTabNavigationOptions
  | ((props: {
      route: RouteProp<HomeTabParamList, keyof HomeTabParamList>;
      navigation: any;
    }) => BottomTabNavigationOptions) = ({ route }) => ({
  headerStyle: {
    backgroundColor: theme.colors.background,
    elevation: 0,
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.semibold,
    fontSize: 18,
    lineHeight: 28,
  },
  tabBarActiveTintColor: theme.colors.secondary,
  tabBarIcon: ({ color, size }) => {
    let iconName = 'meh';

    if (route.name === 'MyTrips') {
      iconName = 'map-pin';
    } else if (route.name === 'Settings') {
      iconName = 'settings';
    }

    return (
      <Icon
        color={color}
        name={iconName}
        size={size}
      />
    );
  },
  tabBarInactiveTintColor: theme.colors.text,
  tabBarLabelStyle: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    lineHeight: 16,
  },
  tabBarStyle: {
    backgroundColor: theme.colors.background,
    borderColor: 'transparent',
    elevation: 0,
    height: 88,
    paddingBottom: 24,
    paddingTop: 16,
  },
});

export default tabScreenOptions;
