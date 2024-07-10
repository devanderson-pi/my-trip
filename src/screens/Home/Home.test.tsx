import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import { HomeTabScreenProps } from '../../navigation/types';
import Home from '.';

test('renders correctly', () => {
  const navigation = {} as HomeTabScreenProps<'MyTrips'>['navigation'];
  const route = {} as HomeTabScreenProps<'MyTrips'>['route'];

  customRender(
    <Home
      navigation={navigation}
      route={route}
    />
  );

  expect(
    screen.getByAccessibilityHint('Tap to add a new trip')
  ).toBeOnTheScreen();
});
