import '@emotion/react';

import { colors, fonts } from '../ui/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    fonts: typeof fonts;
  }
}
