import ItemShoes from "./ItemShoes";

const Shoes = ({ shoes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 p-0 m-0">
      {shoes.map((sneaker) => (
        <ItemShoes key={sneaker.id} sneaker={sneaker} />
      ))}
    </div>
  );
};

export default Shoes;
