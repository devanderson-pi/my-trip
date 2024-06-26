import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/Auth/SignIn';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        component={SignIn}
        name="SignIn"
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
