import { nanoid } from "nanoid";

export const categoryProduct = [
  { _id: nanoid(), title: "Все товары в наличии" },
  { _id: nanoid(), title: "Баскетбольные кроссовки Nike" },
  { _id: nanoid(), title: "Баскетбольные кроссовки Jordan" },
  { _id: nanoid(), title: "Баскетбольные кроссовки Adidas" },
  { _id: nanoid(), title: "Баскетбольные кроссовки Puma" },
  { _id: nanoid(), title: "Аксуссуары" },
  { _id: nanoid(), title: "Другое" },
];

const fetchCategoryProduct = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(categoryProduct);
    }, 1000);
  });

export { fetchCategoryProduct };
