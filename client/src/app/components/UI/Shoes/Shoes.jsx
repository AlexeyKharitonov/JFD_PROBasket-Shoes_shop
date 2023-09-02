import PropTypes from "prop-types";
import ItemShoes from "./ItemShoes";

const Shoes = ({ shoes }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-5 lg:grid-cols-2 p-0 m-0 ">
      {shoes.map((sneaker) => (
        <div
          key={sneaker._id}
          className="hover:scale-102 transform transition-transform "
        >
          <ItemShoes sneaker={sneaker} />
        </div>
      ))}
    </div>
  );
};
Shoes.propTypes = {
  shoes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Shoes;
