import getFontFamily from './utils/getFontFamily';

export const colors = {
  text: '#78828a',
  primary: '#4f3d56',
  secondary: '#1f2c37',
  tertiary: '#ecf1f6',
  error: '#ff3838',
  success: '#2b7979',
  background: '#fdfdfd',
  black: '#000',
  white: '#fff',
} as const;

export const fonts = {
  light: getFontFamily('Inter', '300'),
  normal: getFontFamily('Inter'),
  medium: getFontFamily('Inter', '500'),
  semibold: getFontFamily('Inter', '600'),
  bold: getFontFamily('Inter', 'bold'),
};

const theme = {
  colors,
  fonts,
};

export default theme;
