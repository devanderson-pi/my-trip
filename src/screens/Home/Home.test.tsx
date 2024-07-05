import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import Home from '.';

test('renders correctly', () => {
  customRender(<Home />);

  const heading = screen.getByText('My trips');

  expect(heading).toBeOnTheScreen();
});
