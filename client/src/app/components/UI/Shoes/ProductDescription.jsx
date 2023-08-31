import PropTypes from "prop-types";
const ProductDescription = ({ description, playingThem }) => {
  return (
    <div className="text-sm text-gray-600 leading-6 p-7 ">
      <div className="mb-3 font-bold text-2xl text-center">Описание</div>
      <div style={{ textIndent: "2em" }}>{description}</div>
      <div className="flex items-baseline my-4 flex-wrap">
        <span
          className="font-bold text-xs md:text-base mr-2 mb-1.5"
          style={{ whiteSpace: "nowrap" }}
        >
          Кто в них играет в НБА:
        </span>
        <span className="flex-grow">{playingThem.join(", ")}</span>
      </div>
    </div>
  );
};
ProductDescription.propTypes = {
  description: PropTypes.string.isRequired,
  playingThem: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductDescription;
