import Snackbar from 'react-native-snackbar';

import theme from '../../theme';
import ShowErrorSnackbar from '.';

describe('ui/components/ShowErrorSnackbar', () => {
  test('displays error snackbar when rendered', () => {
    const message = 'Test';

    ShowErrorSnackbar(message);

    expect(Snackbar.show).toHaveBeenCalledWith({
      backgroundColor: theme.colors.error,
      duration: Snackbar.LENGTH_LONG,
      fontFamily: theme.fonts.semibold,
      text: message,
      textColor: theme.colors.white,
    });
  });
});
