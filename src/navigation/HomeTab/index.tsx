import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import Home from '../../screens/Home';
import Settings from '../../screens/Settings';
import { HomeTabParamList } from '../types';
import tabScreenOptions from './tabScreenOptions';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
  const { t } = useTranslation('navigation');

  return (
    <Tab.Navigator
      initialRouteName="MyTrips"
      screenOptions={tabScreenOptions}
    >
      <Tab.Screen
        component={Home}
        name="MyTrips"
        options={{
          headerTitle: t('myTrips'),
          tabBarLabel: t('myTrips'),
        }}
      />

      <Tab.Screen
        component={Settings}
        name="Settings"
        options={{
          headerTitle: t('settings'),
          tabBarLabel: t('settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
