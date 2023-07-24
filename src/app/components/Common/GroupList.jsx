import React, { createContext, useEffect, useRef } from "react";
import { SelectedTitleContext } from "../../hooks/useTitle";
import WorkTimes from "../UI/WorkTimes";

const GroupList = ({ category, onTitleSelect, activeElement }) => {
  // console.log(
  //   category
  //     .filter((el) => el._id === activeElement)
  //     .map((el) => el._id)
  //     .join("")
  // );
  // console.log(category);

  return (
    <>
      <WorkTimes />
      <div>
        {category.map((el, index) => (
          <a
            key={el._id}
            // href="#!"
            aria-current="true"
            className={`block w-11/12 cursor-pointer rounded-3xl p-4 transition duration-500 focus:ring-0 dark:hover:bg-cyan-600 dark:hover:text-neutral-200 dark:focus:bg-cyan-600 dark:focus:text-neutral-200 ${
              // el._id === activeElement
              el === activeElement
                ? "bg-cyan-600 text-neutral-200"
                : "hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500"
            }`}
            onClick={() => onTitleSelect(el)}
          >
            {el.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default GroupList;
