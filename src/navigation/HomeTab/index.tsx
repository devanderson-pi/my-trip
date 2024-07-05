import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home';
import { HomeTabParamList } from '../types';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={Home}
        name="MyTrips"
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
