import PropTypes from "prop-types";
const SearchNotFound = ({ searchQuery }) => {
  return (
    <div className="text-center pt-44 text-neutral-500 text-xl">
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
