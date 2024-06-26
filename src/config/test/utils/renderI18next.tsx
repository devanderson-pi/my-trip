import '../../i18next';

import { render } from '@testing-library/react-native';
import { ReactElement } from 'react';

export const renderI18next = (ui: ReactElement) => {
  return render(ui);
};
