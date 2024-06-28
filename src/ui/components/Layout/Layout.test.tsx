import { screen } from '@testing-library/react-native';

import { renderTheme } from '../../../config/test/utils/renderTheme';
import theme from '../../theme';
import Layout from '.';

describe('ui/components/Layout', () => {
  test('renders correctly', () => {
    renderTheme(
      <Layout
        justify="center"
        testID="layout"
      />
    );

    const layout = screen.getByTestId('layout');

    expect(layout).toBeOnTheScreen();
    expect(layout).toHaveStyle({
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      paddingBottom: 0,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 0,
    });
  });
});
