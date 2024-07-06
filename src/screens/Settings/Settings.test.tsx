import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import Settings from '.';

test('renders correctly', () => {
  customRender(<Settings />);

  expect(screen.getByText('Sign out')).toBeOnTheScreen();
});
