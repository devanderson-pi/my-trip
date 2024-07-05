import 'react-native-gesture-handler';
import './src/config/i18next';

import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/Auth';
import AppNavigator from './src/navigation/AppNavigator';
import theme from './src/ui/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
