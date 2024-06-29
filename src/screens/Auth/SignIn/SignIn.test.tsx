import { screen } from '@testing-library/react-native';

import { customRender } from '../../../config/test/utils/customRender';
import SignIn from '.';

test('renders correctly', () => {
  customRender(<SignIn />);

  const heading = screen.getByTestId('signInScreen');

  expect(heading).toBeOnTheScreen();
});
