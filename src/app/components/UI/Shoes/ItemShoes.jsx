import { Link } from "react-router-dom";
import Badge from "../../Common/Badge";
import FormatPrice from "../../Common/FormatPrice";
import CardWrapper from "../../Common/Wrappers/CardWrapper";
import FavoriteButton from "../../Common/Buttons/FavoriteButton";
import Button from "../../Common/Buttons/Button";

const ItemShoes = ({ sneaker }) => {
  return (
    <CardWrapper>
      <div key={sneaker.id}>
        <div className="flex">
          <div className="overflow-hidden">
            <div className="flex flex-col items-center justify-center ">
              <img
                src={sneaker.image}
                alt="sneaker"
                className="w-full object-cover mb-1.5 rounded-t-3xl"
              />
              {/* <div className="w-full flex flex-col items-center justify-center mt-0 p-2  rounded-shadow"> */}
              <div className="w-full flex flex-col items-center justify-center mt-0 p-2 rounded-shadow">
                <h1 className="text-3xl font-bold mb-2 justify-center">
                  {sneaker.name}
                </h1>
                {/* <div className="flex justify-center w-full items-center mt-2"> */}
                <div className="flex justify-center w-full items-center mt-1 mb-5">
                  {/* <span className="flex-wrap items-center"> */}
                  <span>
                    {sneaker.tags.map((el, index) => (
                      <Badge key={index}>{el}</Badge>
                    ))}
                  </span>
                  <FormatPrice price={sneaker.price} />
                </div>
                <div className="flex justify-between w-full mx-2 px-6 mt-0 mb-3">
                  <Link to={`/product/${sneaker.id}`}>
                    <Button
                      classes={
                        "bg-gradient-to-r px-4 from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-200"
                      }
                    >
                      Подробнее
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      classes={
                        "text-decoration px-7 border-2 border-gray-200 bg-white text-[#4361EE] hover:bg-[#07B3EA] "
                      }
                    >
                      Купить
                    </Button>
                  </Link>
                  <FavoriteButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ItemShoes;
