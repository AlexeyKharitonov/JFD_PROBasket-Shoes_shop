import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        {pages.map((page) => (
          <li key={"page_" + page}>
            <button
              className={
                page === currentPage
                  ? "z-10 px-3 py-2 leading-tight text-white font-semibold border-4 rounded-md border-gray-300 bg-cyan-600"
                  : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        {/* <li>
          <a
            href="#"
            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Pagination;
