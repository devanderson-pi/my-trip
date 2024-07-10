import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import AddTrip from '.';

test('renders correctly', () => {
  customRender(<AddTrip />);

  expect(screen.getByText('Add trip')).toBeOnTheScreen();
});
