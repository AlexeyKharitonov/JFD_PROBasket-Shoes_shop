import { Link } from "react-router-dom";
import styles from "./Shoes.module.scss";

const ItemShoes = ({ sneaker }) => {
  return (
    <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] shadow-indigo-900/40">
      <div key={sneaker.id}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${sneaker.image})` }}
        />
        <div className={styles.info}>
          <div className="flex">
            <div className="w-2/3 m-1 p-0">
              <div className="text-xl mb-1.5 mt-1 mx font-black flex justify-center items-center">
                {sneaker.name}
              </div>
              <p className="opacity-75 text-lg mb-2.5 mx-6 text-blue-800 border-2 border-gray-300 p-2 rounded-md flex justify-center items-center">
                {new Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                }).format(sneaker.price)}
              </p>
            </div>
            <div className="w-1/3 m-3">
              <Link to={`/product/${sneaker.id}`}>
                <button className="opacity-50 relative inline-flex items-center justify-center p-0.5 my-2 mr-2 overflow-hidden text-lg font-black text-gray-900 rounded-3xl group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-blue-600">
                  <span className=" relative px-3 py-5 transition-all ease-in duration-75 bg-white dark:bg-state-50 rounded-md group-hover:bg-opacity-0">
                    Подробнее
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* <p className="mb-2.5">
            {new Intl.NumberFormat("ru-RU", {
              style: "currency",
              currency: "RUB",
            }).format(sneaker.price)}
          </p>
          <button className={styles.btn}>Подробная информация</button> */}
        </div>
      </div>
    </div>
  );
};

export default ItemShoes;
