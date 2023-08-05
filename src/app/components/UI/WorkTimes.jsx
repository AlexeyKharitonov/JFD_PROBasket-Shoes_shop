import { BiTimeFive } from "react-icons/bi";

const WorkTimes = () => {
  return (
    <div className="flex mx-1.5 items-center mb-5 py-2.5 px-2 justify-center text-base text-gray-400 border-y-4 border-pink-500 border-opacity-50 rounded-3xl">
      <div className="relative ">
        <img
          src={"/Jordan4.jpg"}
          alt="Jordan Retro 4"
          style={{ width: "120px", height: "auto" }}
          className="rounded-xl opacity-80"
        />
      </div>
      <div>
        <BiTimeFive
          size={24}
          fontSize="12px"
          className="mr-2.5 ml-2.5 text-center opacity-70 text-rose-600"
        />
      </div>
      <div className="text-sm">
        График работы магазина (мск):
        <br />
        По будням с 8.00—22.00;
        <br />
        По выходным 8.00—20.00
      </div>
    </div>
  );
};

export default WorkTimes;
