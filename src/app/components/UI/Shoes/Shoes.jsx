import ItemShoes from "./ItemShoes";
import DropDownButton from "../../Common/DropDownButton";

const Shoes = ({ shoes }) => {
  return (
    <div className="grid grid-cols-2 gap-5 p-0 m-0">
      {shoes.map((sneaker) => (
        <ItemShoes key={sneaker.id} sneaker={sneaker} />
      ))}
    </div>
  );
};

export default Shoes;
