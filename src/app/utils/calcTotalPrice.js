export const calcTotalPrice = (items) =>
  items.reduce((acc, products) => (acc += products.price), 0);
