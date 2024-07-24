import formatCurrency from './formatCurrency';

describe('utils/formatCurrency', () => {
  test('formats 70 to USD currency', () => {
    const amount = formatCurrency(70, 'en-US');
    expect(amount).toEqual('$70.00');
  });

  test('formats 70 to BRL currency', () => {
    const amount = formatCurrency(70, 'pt-BR');
    expect(amount).toEqual(`R$${String.fromCharCode(160)}70,00`);
  });
});
