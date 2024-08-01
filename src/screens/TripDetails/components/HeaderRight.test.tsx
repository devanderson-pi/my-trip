import '../../../config/i18next';

import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, userEvent } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';

import theme from '../../../ui/theme';
import TripDetailsHeaderRight from './HeaderRight';

jest.useFakeTimers();

const wrapper = ({ children }: PropsWithChildren) => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </NavigationContainer>
);

describe('screens/TripDetails/components/HeaderRight', () => {
  test('renders correctly', async () => {
    const user = userEvent.setup();
    render(<TripDetailsHeaderRight tripId="test" />, { wrapper });

    const menuTrigger = screen.getByTestId('menuTrigger');

    expect(menuTrigger).toBeOnTheScreen();

    await user.press(menuTrigger);

    expect(await screen.findByText('Add expense')).toBeOnTheScreen();
  });
});
