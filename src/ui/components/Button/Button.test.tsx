import { fireEvent, render, screen } from '@testing-library/react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../../theme';
import Button from '.';

describe('ui/components/Button', () => {
  test('renders default Button correctly', () => {
    const onPressMock = jest.fn();

    render(
      <Button
        onPress={onPressMock}
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Test');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.primary,
      height: 48,
    });
    expect(label).toHaveStyle({
      color: theme.colors.background,
      fontFamily: theme.fonts.medium,
      fontSize: 18,
      lineHeight: 28,
    });

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('renders medium Button correctly', () => {
    render(
      <Button
        size="md"
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Test');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();

    expect(button).toHaveStyle({
      backgroundColor: theme.colors.primary,
      height: 40,
    });
    expect(label).toHaveStyle({
      color: theme.colors.background,
      fontFamily: theme.fonts.medium,
      fontSize: 16,
      lineHeight: 24,
    });
  });

  test('renders ghost Button correctly', () => {
    render(
      <Button
        color={theme.colors.error}
        variant="ghost"
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Test');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();

    expect(button).toHaveStyle({
      backgroundColor: 'transparent',
    });
    expect(label).toHaveStyle({
      color: theme.colors.error,
      fontFamily: theme.fonts.medium,
    });
  });

  test('renders outline Button correctly', () => {
    render(
      <Button
        variant="outline"
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Test');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();

    expect(button).toHaveStyle({
      backgroundColor: 'transparent',
      borderBottomColor: theme.colors.secondary,
      borderBottomWidth: 1,
    });
    expect(label).toHaveStyle({
      color: theme.colors.secondary,
      fontFamily: theme.fonts.medium,
    });
  });

  test('renders disabled Button correctly', () => {
    render(
      <Button
        disabled
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Test');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();

    expect(button).toHaveStyle({
      opacity: 0.63,
    });
    expect(label).toHaveStyle({
      opacity: 0.63,
    });
  });

  test('renders loading text when isLoading is true', () => {
    render(
      <Button
        isLoading
        loadingText="Submitting"
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Submitting');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();
  });

  test('renders left icon when provided', () => {
    render(
      <Button
        leftIcon={
          <Icon
            name="meh"
            testID="icon"
          />
        }
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const icon = screen.getByTestId('icon');

    expect(button).toBeOnTheScreen();
    expect(icon).toBeOnTheScreen();
  });

  test('renders labels with correct colors', () => {
    const labels = [{ text: 'Label 1' }, { text: 'Label 2', color: 'red' }];

    render(<Button label={labels}>Test</Button>);

    labels.forEach(({ text, color }) => {
      const label = screen.getByText(text);

      expect(label).toBeOnTheScreen();
      expect(label).toHaveStyle({
        color: color || theme.colors.background,
      });
    });
  });

  test('verify that the button maintains a visually active appearance while disabled during the loading state', () => {
    render(
      <Button
        disabled
        isLoading
        testID="button"
      >
        Test
      </Button>
    );

    const button = screen.getByTestId('button');
    const label = screen.getByText('Loading');

    expect(button).toBeOnTheScreen();
    expect(label).toBeOnTheScreen();

    expect(button).not.toHaveStyle({
      opacity: 0.63,
    });
    expect(label).not.toHaveStyle({
      opacity: 0.63,
    });
  });
});
