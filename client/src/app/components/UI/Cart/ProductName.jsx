import PropTypes from "prop-types";
import { MdRemoveShoppingCart } from "react-icons/md";

const ProductName = ({ name, price, onDelete, id, size }) => {
  return (
    <div className="flex justify-between mb-4 items-center">
      <span className="w-[125px] truncate mr-4">{name}</span>{" "}
      <div className="flex items-center">
        <span className="text-center mr-5">{size}</span>
        <span className="text-center mr-4">{price} руб.</span>
        <button onClick={() => onDelete(id)}>
          <MdRemoveShoppingCart
            size={32}
            // color="#D96259"
            className="text-[#D96259] hover:text-[#C8524A] hover:scale-105 transition-all"
          />
        </button>
      </div>
    </div>
  );
};
ProductName.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default ProductName;
