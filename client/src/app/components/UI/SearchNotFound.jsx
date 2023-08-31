import PropTypes from "prop-types";
const SearchNotFound = ({ searchQuery }) => {
  return (
    <div className="text-center mt-44 mx-24 p-4 rounded-2xl bg-white text-neutral-500 text-xl shadow-2xl">
      {`По запросу «`}
      <span className="text-[#0f6fd1]">{searchQuery}</span>
      {`» ничего не найдено`}
    </div>
  );
};
SearchNotFound.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default SearchNotFound;
