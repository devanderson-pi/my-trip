import '../../i18next';

import { ThemeProvider } from '@emotion/react';
import { render } from '@testing-library/react-native';
import { ReactElement } from 'react';

import theme from '../../../ui/theme';

export const customRender = (ui: ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
