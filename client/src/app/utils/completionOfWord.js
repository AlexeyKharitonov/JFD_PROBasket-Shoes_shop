export const completionOfWord = (wordLength) => {
  //   const lastDigit = String(wordLength).slice(-1);
  if (wordLength === 1) return `${wordLength} товар`;
  if ([2, 3, 4].includes(wordLength) && ![12, 13, 14].includes(wordLength))
    return `${wordLength} товара`;
  return `${wordLength} товаров`;
};

//Окончание глагола - выбран/выбрано
export const completionOVerb = (wordLength) => {
  if ([1].includes(wordLength) && ![11].includes(wordLength)) return `выбран`;
  return `выбрано`;
};
