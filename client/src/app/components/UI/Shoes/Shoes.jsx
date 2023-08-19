import ItemShoes from "./ItemShoes";

const Shoes = ({ shoes }) => {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 p-0 m-0 ">
      {shoes.map((sneaker) => (
        <div className="hover:scale-102 transform transition-transform ">
          <ItemShoes key={sneaker._id} sneaker={sneaker} />
        </div>
      ))}
    </div>
  );
};

export default Shoes;
