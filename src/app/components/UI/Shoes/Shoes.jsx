import styles from "./Shoes.module.scss";
import ItemShoes from "./ItemShoes";
import DropDownButton from "../../Common/DropDownButton";

const Shoes = ({ shoes }) => {
  return (
    <>
      <DropDownButton />
      <div className={styles.gridContainer}>
        {shoes.map((sneaker) => (
          <ItemShoes key={sneaker.id} sneaker={sneaker} />
        ))}
      </div>
    </>
  );
};

export default Shoes;
