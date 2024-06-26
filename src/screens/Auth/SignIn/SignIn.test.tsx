import { screen } from '@testing-library/react-native';

import { renderI18next } from '../../../config/test/utils/renderI18Next';
import SignIn from '.';

test('renders correctly', () => {
  renderI18next(<SignIn />);

  const heading = screen.getByText('Sign in');

  expect(heading).toBeOnTheScreen();
});
