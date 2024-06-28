import { fireEvent, screen } from '@testing-library/react-native';

import { renderTheme } from '../../../config/test/utils/renderTheme';
import theme from '../../theme';
import Input from '.';

describe('ui/components/Input', () => {
  test('renders correctly', () => {
    const onChangeMock = jest.fn();

    renderTheme(
      <Input
        accessibilityLabel="Name"
        onChange={onChangeMock}
      />
    );

    const input = screen.getByLabelText('Name');

    expect(input).toBeOnTheScreen();
    expect(input).toHaveStyle({
      backgroundColor: theme.colors.background,
      borderBottomColor: theme.colors.tertiary,
      borderBottomLeftRadius: 6,
      borderBottomWidth: 1,
      color: theme.colors.text,
      fontFamily: theme.fonts.normal,
      fontSize: 18,
      height: 46,
      paddingBottom: 0,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 0,
    });

    fireEvent.changeText(input, 'Anderson');
    expect(onChangeMock).toHaveBeenCalledWith('Anderson');
  });
});
