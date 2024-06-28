import { render, screen } from '@testing-library/react-native';

import theme from '../../theme';
import Text from '.';

describe('ui/components/Text', () => {
  test('renders default Text correctly', () => {
    render(<Text>Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      color: theme.colors.text,
      fontFamily: theme.fonts.normal,
      fontSize: 16,
      lineHeight: 24,
    });
  });

  test('renders small Text correctly', () => {
    render(<Text size="sm">Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      fontSize: 14,
      lineHeight: 20,
    });
  });

  test('renders extra small Text correctly', () => {
    render(<Text size="xs">Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      fontSize: 12,
      lineHeight: 16,
    });
  });

  test('renders Text with medium font correctly', () => {
    render(<Text weight="medium">Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      fontFamily: theme.fonts.medium,
    });
  });

  test('renders Text with semibold font correctly', () => {
    render(<Text weight="semibold">Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      fontFamily: theme.fonts.semibold,
    });
  });

  test('renders Text with specified color correctly', () => {
    render(<Text color="red">Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      color: 'red',
    });
  });

  test('renders Text with centered alignment correctly', () => {
    render(<Text centerText>Test</Text>);

    const text = screen.getByText('Test');

    expect(text).toBeOnTheScreen();
    expect(text).toHaveStyle({
      textAlign: 'center',
    });
  });
});
