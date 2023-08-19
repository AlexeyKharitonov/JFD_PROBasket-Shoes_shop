import WorkTimes from "../UI/WorkTimes";

const GroupList = ({ category, onTitleSelect, activeElement }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <WorkTimes />
      <div className="rounded-3xl border-0 py-4 px-5 bg-[#EEEEEE] text">
        {category.map((el, index) => (
          <button
            key={el._id}
            className={`block w-full cursor-pointer text-left rounded-3xl p-4 transition duration-500 focus:ring-0 dark:hover:bg-[#07c0ea] dark:hover:text-neutral-300 dark:focus:bg-[#07B3EA] dark:focus:text-neutral-200 whitespace-nowrap ${
              el === activeElement
                ? "bg-[#2D92B1] text-neutral-200"
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

export default GroupList;
