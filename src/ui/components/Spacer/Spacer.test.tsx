import { render, screen } from '@testing-library/react-native';

import Spacer from '.';

describe('ui/components/Spacer', () => {
  test('renders vertical Spacer with height of 16 pixels', () => {
    render(
      <Spacer
        size={16}
        testID="verticalSpacer"
      />
    );

    const verticalSpacer = screen.getByTestId('verticalSpacer');

    expect(verticalSpacer).toBeOnTheScreen();
    expect(verticalSpacer).toHaveStyle({
      height: 16,
    });
  });

  test('renders horizontal Spacer with width of 16 pixels', () => {
    render(
      <Spacer
        direction="horizontal"
        size={16}
        testID="horizontalSpacer"
      />
    );

    const horizontalSpacer = screen.getByTestId('horizontalSpacer');

    expect(horizontalSpacer).toBeOnTheScreen();
    expect(horizontalSpacer).toHaveStyle({
      width: 16,
    });
  });
});
