type Weight = '300' | '400' | 'normal' | '500' | '600' | '700' | 'bold';
type FontFamily = 'Inter';

const getFontFamily = (fontFamily: FontFamily, weight?: Weight) => {
  switch (weight) {
    case '300':
      return `${fontFamily}-Light`;
    case '400':
    case 'normal':
      return `${fontFamily}-Regular`;
    case '500':
      return `${fontFamily}-Medium`;
    case '600':
      return `${fontFamily}-SemiBold`;
    case '700':
    case 'bold':
      return `${fontFamily}-Bold`;
    default:
      return `${fontFamily}-Regular`;
  }
};

export default getFontFamily;
