const shoesData = [
  {
    id: 1,
    name: "LeBron Witness 7",
    price: 16990,
    title: "Баскетбольные кроссовки Nike",
    image: "LeBronWitness7.jpg",
  },
  {
    id: 2,
    name: "Giannis Immortality 2",
    price: 12990,
    title: "Баскетбольные кроссовки Nike",
    image: "Giannis2.jpg",
  },
  {
    id: 3,
    name: "Jordan Why Not 5",
    title: "Баскетбольные кроссовки Jordan",
    price: 11990,
    image: "/WhyNot5.jpg",
  },
  {
    id: 4,
    name: "Jordan Tatum 1",
    title: "Баскетбольные кроссовки Jordan",
    price: 12990,
    image: "/Tatum1.jpg",
  },
  {
    id: 5,
    name: "Nike Cosmic Unity 2",
    title: "Баскетбольные кроссовки Nike",
    price: 15990,
    image: "/CosmicUnity2.jpg",
  },
  {
    id: 6,
    name: "PUMA MB",
    title: "Баскетбольные кроссовки Puma",
    price: 13990,
    image: "/PUMAMB.jpg",
  },
  {
    id: 7,
    name: "Adidas Dame 8",
    title: "Баскетбольные кроссовки Adidas",
    price: 19999,
    image: "/Dame8.jpg",
  },
  {
    id: 8,
    name: "Kyrie 8",
    title: "Баскетбольные кроссовки Nike",
    price: 16990,
    image: "/Kyrie8.jpg",
  },
  {
    id: 9,
    name: "Nike KD15",
    title: "Баскетбольные кроссовки Nike",
    price: 16990,
    image: "/KD15.jpg",
  },
  {
    id: 10,
    name: "Nike ZOOM RIZE 2",
    title: "Баскетбольные кроссовки Nike",
    price: 11300,
    image: "/RIZE2.jpg",
  },
  {
    id: 11,
    name: "Jordan Why Not 4",
    title: "Баскетбольные кроссовки Jordan",
    price: 10990,
    image: "/WhyNot4.jpg",
  },
  {
    id: 12,
    name: "Adidas Harden Vol. 5",
    title: "Баскетбольные кроссовки Adidas",
    price: 9990,
    image: "/harden_vol._5.jpg",
  },
  {
    id: 13,
    name: "Adidas Trae Young 1",
    title: "Баскетбольные кроссовки Adidas",
    price: 10990,
    image: "/Young1.jpg",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(shoesData);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(shoesData.find((product) => product.id === id));
    }, 1000);
  });

export { fetchAll, getById };
// export default {
//   fetchAll,
// };
