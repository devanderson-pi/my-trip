import getFontFamily from './getFontFamily';

describe('utils/getFontFamily', () => {
  test('when 300 is passed to weight, should get light font', () => {
    const fontFamily = getFontFamily('Inter', '300');

    expect(fontFamily).toEqual('Inter-Light');
  });

  test('when no weight is specified, should get normal font', () => {
    const fontFamily = getFontFamily('Inter');

    expect(fontFamily).toEqual('Inter-Regular');
  });

  test('when 500 is passed to weight, should get medium font', () => {
    const fontFamily = getFontFamily('Inter', '500');

    expect(fontFamily).toEqual('Inter-Medium');
  });

  test('when 600 is passed to weight, should get semibold font', () => {
    const fontFamily = getFontFamily('Inter', '600');

    expect(fontFamily).toEqual('Inter-SemiBold');
  });

  test('when bold is passed to weight, should get bold font', () => {
    const fontFamily = getFontFamily('Inter', 'bold');

    expect(fontFamily).toEqual('Inter-Bold');
  });
});
