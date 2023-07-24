import { useState } from "react";

const DropDownButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" mb-4 flex justify-end">
      <button
        id="dropdownRightButton"
        data-dropdown-toggle="dropdownRight"
        data-dropdown-placement="right"
        className="text-base mr-11 mb-3 md:mb-0  text-neutral-200 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg px-6 py-2.5 text-center inline-flex items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark: focus:text-neutral-300 dark:focus:ring-blue-400"
        onClick={() => setOpen((prev) => !prev)}
      >
        По новизне
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </button>
      {open && (
        <div
          id="dropdownRight"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownRightButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                По цене: по возрастанию
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                По цене: по убыванию
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDownButton;
