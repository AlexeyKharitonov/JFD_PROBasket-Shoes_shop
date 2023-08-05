import Lebron from "../../../src/images/players/LebronJames.jpg";
import Witness7_1 from "../../images//Products/Witness7/1.jpeg";
import Witness7_2 from "../../images//Products/Witness7/2.jpeg";
import Witness7_3 from "../../images//Products/Witness7/3.jpeg";
import Witness7_4 from "../../images//Products/Witness7/4.jpeg";
import Witness7_5 from "../../images//Products/Witness7/5.jpeg";

const shoesData = [
  {
    id: 1,
    name: "LeBron Witness 7",
    price: 16990,
    tags: ["nike", "кроссовки"],
    title: "Баскетбольные кроссовки Nike",
    image: "/LeBronWitness7.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    slidersList: [Witness7_1, Witness7_2, Witness7_3, Witness7_4, Witness7_5],
    basketballPlayerInSneakers: Lebron,
    description: `Леброн Джеймс сияет на паркетах NBA уже двадцатый сезон к ряду и кажется,
      не собирается на этом останавливаться. Новые модели из его именных сникер линеек
      также исправно поступают на полки главных баскетбольных магазинов мира
      Nike LeBron Witness VII — игровые баскетбольные кроссовки средней высоты
      
      Передняя часть выполнена из легковесного и дышащего текстиля, а задник
      кроссовка украшает фирменный лев. Стильный силуэт завершают внушительные
      боковые накладки из TPU в области пятки.`,
  },
  {
    id: 2,
    name: "Giannis Immortality 2",
    price: 12990,
    tags: ["nike", "кроссовки"],
    title: "Баскетбольные кроссовки Nike",
    image: "/Giannis2.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 3,
    name: "Jordan Why Not 5",
    title: "Баскетбольные кроссовки Jordan",
    price: 11990,
    tags: ["jordan", "кроссовки"],
    image: "/WhyNot5.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 4,
    name: "Jordan Tatum 1",
    title: "Баскетбольные кроссовки Jordan",
    price: 12990,
    tags: ["jordan", "кроссовки"],
    image: "/Tatum1.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 5,
    name: "Nike Cosmic Unity 2",
    title: "Баскетбольные кроссовки Nike",
    price: 15990,
    tags: ["nike", "кроссовки"],
    image: "/CosmicUnity2.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 6,
    name: "PUMA MB",
    title: "Баскетбольные кроссовки Puma",
    price: 13990,
    tags: ["puma", "кроссовки"],
    image: "/PUMAMB.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 7,
    name: "Adidas Dame 8",
    title: "Баскетбольные кроссовки Adidas",
    price: 19999,
    tags: ["adidas", "кроссовки"],
    image: "/Dame8.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 8,
    name: "Kyrie 8",
    title: "Баскетбольные кроссовки Nike",
    price: 16990,
    tags: ["nike", "кроссовки"],
    image: "/Kyrie8.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 9,
    name: "Nike KD15",
    title: "Баскетбольные кроссовки Nike",
    price: 16990,
    tags: ["nike", "кроссовки"],
    image: "/KD15.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 10,
    name: "Nike ZOOM RIZE 2",
    title: "Баскетбольные кроссовки Nike",
    price: 11300,
    tags: ["nike", "кроссовки"],
    image: "/RIZE2.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 11,
    name: "Jordan Why Not 4",
    title: "Баскетбольные кроссовки Jordan",
    price: 10990,
    tags: ["jordan", "кроссовки"],
    image: "/WhyNot4.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 12,
    name: "Adidas Harden Vol. 5",
    title: "Баскетбольные кроссовки Adidas",
    price: 9990,
    tags: ["adidas", "кроссовки"],
    image: "/harden_vol._5.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
  {
    id: 13,
    name: "Adidas Trae Young 1",
    title: "Баскетбольные кроссовки Adidas",
    price: 10990,
    tags: ["adidas", "кроссовки"],
    image: "/Young1.jpg",
    sizes: [40, 41, 42, 42.5, 43, 44, 45],
    basketballPlayerInSneakers: Lebron,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(shoesData);
    }, 1000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(shoesData.find((product) => product.id === id));
    }, 500);
  });

export { fetchAll, getById };
// export default {
//   fetchAll,
// };
