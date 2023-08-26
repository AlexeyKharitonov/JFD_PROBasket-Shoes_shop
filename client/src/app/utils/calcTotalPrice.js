export const calcTotalPrice = (items, count) =>
  items
    ? items.reduce((acc, product) => acc + product.price * product.count, 0)
    : 0;
