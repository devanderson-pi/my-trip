const formatCurrency = (amount: number, language: string) => {
  const currency = language === 'pt-BR' ? 'BRL' : 'USD';

  const formatter = new Intl.NumberFormat(language, {
    currency,
    style: 'currency',
  });

  return formatter.format(amount);
};

export default formatCurrency;
