import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../hooks/useAuth';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import HomeTab from './HomeTab';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <Stack.Group>
          <Stack.Screen
            component={HomeTab}
            name="HomeTab"
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            component={SignIn}
            name="SignIn"
          />

          <Stack.Screen
            component={SignUp}
            name="SignUp"
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
