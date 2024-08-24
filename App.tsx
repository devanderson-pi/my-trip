import 'react-native-gesture-handler';
import './src/config/i18next';

import { ThemeProvider } from '@emotion/react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthProvider } from './src/contexts/Auth';
import AppNavigator from './src/navigation/AppNavigator';
import theme from './src/ui/theme';

const App = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <BottomSheetModalProvider>
            <AuthProvider>
              <AppNavigator />
            </AuthProvider>
          </BottomSheetModalProvider>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
