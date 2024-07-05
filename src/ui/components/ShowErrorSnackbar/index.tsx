import Snackbar from 'react-native-snackbar';

import theme from '../../theme';

const ShowErrorSnackbar = (message: string) => {
  const showSnackbar = () => {
    if (message) {
      Snackbar.show({
        backgroundColor: theme.colors.error,
        duration: Snackbar.LENGTH_LONG,
        fontFamily: theme.fonts.semibold,
        text: message,
        textColor: theme.colors.white,
      });
    }
  };

  showSnackbar();

  return null;
};

export default ShowErrorSnackbar;
