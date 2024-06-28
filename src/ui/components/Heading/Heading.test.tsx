import { screen } from '@testing-library/react-native';

import { renderTheme } from '../../../config/test/utils/renderTheme';
import theme from '../../theme';
import Heading from '.';

describe('ui/components/Heading', () => {
  test('renders default Heading correctly', () => {
    renderTheme(<Heading>Test</Heading>);

    const heading = screen.getByText('Test');

    expect(heading).toBeOnTheScreen();
    expect(heading).toHaveStyle({
      color: theme.colors.secondary,
      fontFamily: theme.fonts.semibold,
      fontSize: 16,
      lineHeight: 24,
    });
  });

  test('renders large Heading correctly', () => {
    renderTheme(<Heading size="lg">Test</Heading>);

    const heading = screen.getByText('Test');

    expect(heading).toBeOnTheScreen();
    expect(heading).toHaveStyle({
      fontSize: 18,
      lineHeight: 28,
    });
  });

  test('renders extra large Heading correctly', () => {
    renderTheme(<Heading size="3xl">Test</Heading>);

    const heading = screen.getByText('Test');

    expect(heading).toBeOnTheScreen();
    expect(heading).toHaveStyle({
      fontSize: 30,
      lineHeight: 36,
    });
  });
});
