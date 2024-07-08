import { screen } from '@testing-library/react-native';

import { renderTheme } from '../../../config/test/utils/renderTheme';
import theme from '../../theme';
import Heading from '../Heading';
import Card from '.';

describe('ui/components/Card', () => {
  test('renders correctly', () => {
    renderTheme(
      <Card testID="card">
        <Heading>Test</Heading>
      </Card>
    );

    const card = screen.getByTestId('card');

    expect(card).toBeOnTheScreen();
    expect(card).toHaveStyle({
      backgroundColor: theme.colors.background,
      borderBottomColor: theme.colors.tertiary,
      borderBottomWidth: 1,
    });
  });
});
