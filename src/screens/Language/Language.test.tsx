import { screen } from '@testing-library/react-native';

import { customRender } from '../../config/test/utils/customRender';
import Language from '.';

test('renders correctly', () => {
  customRender(<Language />);

  expect(screen.getByText('English')).toBeOnTheScreen();
});
