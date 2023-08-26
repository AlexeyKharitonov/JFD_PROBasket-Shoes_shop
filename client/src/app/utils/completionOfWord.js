export const completionOfWord = (count) => {
  const lastDigit = count % 10;
  const secondToLastDigit = Math.floor(count / 10) % 10;
  if (lastDigit === 1 && secondToLastDigit !== 1) return `${count} товар`;
  if ([2, 3, 4].includes(lastDigit) && secondToLastDigit !== 1)
    return `${count} товара`;
  return `${count} товаров`;
};

export const completionOVerb = (count) => {
  const lastDigit = count % 10;
  const secondToLastDigit = Math.floor(count / 10) % 10;
  if (lastDigit === 1 && secondToLastDigit !== 1) return `выбран`;
  return `выбрано`;
};
