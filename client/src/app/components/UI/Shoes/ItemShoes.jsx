import { NavLink } from "react-router-dom";
import CardWrapper from "../../Common/Wrappers/CardWrapper";
import ProductCard from "./ProductCard";

const ItemShoes = ({ sneaker }) => {
  return (
    <CardWrapper className="sm:px-2 md:px-4 lg:px-6">
      <div key={sneaker._id}>
        <div className="flex  ">
          <div className="">
            <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4">
              <ProductCard
                sneaker={sneaker}
                className="text-xs sm:text-sm md:text-base lg:text-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ItemShoes;
