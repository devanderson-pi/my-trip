import 'react-native-gesture-handler';
import './src/config/i18next';

import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './src/navigation/AppNavigator';
import theme from './src/ui/theme';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
