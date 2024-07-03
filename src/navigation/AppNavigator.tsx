import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
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

      <Stack.Screen
        component={SignUp}
        name="SignUp"
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
