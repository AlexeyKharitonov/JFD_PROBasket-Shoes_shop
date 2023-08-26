import PropTypes from "prop-types";
import _ from "lodash";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex justify-center items-center space-x-0">
        <li>
          <button
            className="focus:outline-none px-4 py-2 leading-tight text-gray-500 bg-white border-2 border-gray-300 rounded-l-lg shadow-md hover:bg-gray-300 hover:text-black transition duration-200 ease-in-out flex items-center justify-center"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <MdKeyboardArrowLeft size={21} />
          </button>
        </li>
        {pages.map((page) => (
          <li key={"page_" + page}>
            <button
              className={
                page === currentPage
                  ? "focus:outline-none z-10 w-10 px-4 py-2 leading-tight text-white font-semibold border-2 border-transparent rounded-md shadow-md bg-[#0f6fd1] hover:bg-[#0b5eb3] transition duration-200 ease-in-out flex items-center justify-center"
                  : "focus:outline-none w-10 px-4 py-2 leading-tight text-gray-500 bg-white border-2 border-gray-300 rounded-md shadow-md hover:bg-gray-300 hover:text-black transition duration-200 ease-in-out flex items-center justify-center"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className="focus:outline-none px-4 py-2 leading-tight text-gray-500 bg-white border-2 border-gray-300 rounded-r-lg shadow-md hover:bg-gray-300 hover:text-black transition duration-200 ease-in-out flex items-center justify-center"
            onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
          >
            <MdKeyboardArrowRight size={21} />
          </button>
        </li>
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
