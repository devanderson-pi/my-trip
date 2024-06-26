import { render, screen } from '@testing-library/react-native';

import SignIn from '.';

test('renders correctly', () => {
  render(<SignIn />);

  const heading = screen.getByText('Sign In');

  expect(heading).toBeOnTheScreen();
});
