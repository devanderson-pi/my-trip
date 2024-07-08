import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import Home from '.';

test('renders correctly', () => {
  customRender(<Home />);

  expect(
    screen.getByAccessibilityHint('Tap to add a new trip')
  ).toBeOnTheScreen();
});
