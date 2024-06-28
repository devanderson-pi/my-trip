import { render, screen } from '@testing-library/react-native';

import Flex from '.';

describe('ui/components/Flex', () => {
  test('renders correctly', () => {
    render(<Flex testID="flex" />);

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    });
  });

  test('renders Flex component with align center', () => {
    render(
      <Flex
        align="center"
        testID="flex"
      />
    );

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      alignItems: 'center',
    });
  });

  test('renders Flex component with row direction', () => {
    render(
      <Flex
        direction="row"
        testID="flex"
      />
    );

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      flexDirection: 'row',
    });
  });

  test('renders Flex component with gap of 18', () => {
    render(
      <Flex
        gap={18}
        testID="flex"
      />
    );

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      gap: 18,
    });
  });

  test('renders Flex component with justify center', () => {
    render(
      <Flex
        justify="center"
        testID="flex"
      />
    );

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      justifyContent: 'center',
    });
  });

  test('renders Flex component with flex wrap wrap', () => {
    render(
      <Flex
        testID="flex"
        wrap="wrap"
      />
    );

    const flex = screen.getByTestId('flex');

    expect(flex).toHaveStyle({
      flexWrap: 'wrap',
    });
  });
});
