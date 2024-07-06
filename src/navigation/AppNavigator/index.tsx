import { createStackNavigator } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../../hooks/useAuth';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';
import Language from '../../screens/Language';
import HomeTab from '../HomeTab';
import { RootStackParamList } from '../types';
import navigatorScreenOptions from './navigatorScreenOptions';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { user } = useAuth();
  const { t } = useTranslation('navigation');

  return (
    <Stack.Navigator
      initialRouteName="SignIn"
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

          <Stack.Screen
            component={Language}
            name="Language"
            options={{
              ...navigatorScreenOptions,
              headerTitle: t('language'),
            }}
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
