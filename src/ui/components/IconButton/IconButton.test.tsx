import { render, screen } from '@testing-library/react-native';

import theme from '../../theme';
import IconButton from '.';

describe('ui/components/IconButton', () => {
  test('renders default IconButton correctly', () => {
    render(
      <IconButton
        iconName="check"
        testID="test"
      />
    );

    const iconButton = screen.getByTestId('test');

    expect(iconButton).toBeOnTheScreen();
    expect(iconButton).toHaveStyle({
      backgroundColor: theme.colors.text,
    });
  });

  test('renders outline IconButton correctly', () => {
    render(
      <IconButton
        iconName="check"
        testID="test"
        variant="outline"
      />
    );

    const iconButton = screen.getByTestId('test');

    expect(iconButton).toBeOnTheScreen();
    expect(iconButton).toHaveStyle({
      backgroundColor: 'transparent',
      borderBottomColor: theme.colors.tertiary,
      borderBottomWidth: 1,
    });
  });
});
