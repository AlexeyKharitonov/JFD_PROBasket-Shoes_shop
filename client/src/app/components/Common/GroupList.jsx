import PropTypes from "prop-types";
import WorkTimes from "../UI/WorkTimes";
const GroupList = ({ category, onTitleSelect, activeElement }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <WorkTimes />
      <div className="rounded-3xl border-0 py-4 px-5 bg-[#EEEEEE] text">
        {category.map((el) => (
          <button
            key={el._id}
            className={`block w-full cursor-pointer text-left text-gray-700 font-semibold rounded-3xl p-4 transition duration-500 focus:ring-0 hover:scale-105 dark:hover:bg-[#0b5eb3] dark:hover:text-neutral-300 dark:focus:bg-[#0f6fd1] dark:focus:text-neutral-200 whitespace-nowrap ${
              el === activeElement
                ? "bg-[#0f6fd1] text-neutral-200 hover:scale-105"
                : "hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500"
            }`}
            onClick={() => onTitleSelect(el)}
          >
            {el.title}
          </button>
        ))}
      </div>
    </div>
  );
};
GroupList.propTypes = {
  category: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTitleSelect: PropTypes.func.isRequired,
  activeElement: PropTypes.object,
};

export default GroupList;
