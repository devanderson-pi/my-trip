import { screen, userEvent } from '@testing-library/react-native';

import { renderTheme } from '../../../config/test/utils/renderTheme';
import theme from '../../theme';
import Menu, { MenuItem, MenuProps } from '.';

jest.useFakeTimers();

describe('ui/components/Menu', () => {
  const options: MenuItem[] = [
    {
      action: jest.fn(),
      icon: 'plus',
      text: 'Add expense',
    },
    {
      action: jest.fn(),
      icon: 'trash',
      text: 'Delete trip',
      color: theme.colors.error,
    },
  ];

  const props: MenuProps = {
    isOpen: true,
    onClose: jest.fn(),
    options,
    position: {
      right: 24,
      top: 52,
    },
  };

  test('renders correctly', async () => {
    const user = userEvent.setup();
    renderTheme(<Menu {...props} />);

    const menuItem = screen.getByText('Add expense');

    expect(menuItem).toBeOnTheScreen();

    await user.press(menuItem);

    expect(props.options[0].action).toHaveBeenCalledTimes(1);
  });
});
