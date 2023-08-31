import PropTypes from "prop-types";
const SearchInput = ({ onSearchQuery, searchQuery }) => {
  return (
    <div className="relative max-w-screen-lg mx-auto hover:scale-101 transition duration-300">
      <div className="absolute top-0 left-5 w-6 h-full py-8 mt-[7px] flex text-gray-500 justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="text"
        name="searchQuery"
        maxLength="19"
        placeholder="Введите название интересуемого товара..."
        className="text-xl shadow-xl border-4 border-gray-300 bg-gray-100 outline-0 rounded-3xl w-full py-2.5 px-12 mt-3 hover:border-[#B0B8C1]"
        onChange={onSearchQuery}
        value={searchQuery}
      />
    </div>
  );
};
SearchInput.propTypes = {
  onSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default SearchInput;
