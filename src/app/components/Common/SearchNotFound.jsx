const SearchNotFound = ({ searchQuery }) => {
  return (
    // <div className="mt-4 text-center pt-32 text-gray-600">
    //   Ничего не найдено
    // </div>
    // <div className="text-center h-screen flex flex-col items-center justify-center">
    // <div className="bg-blue-100 text-blue-800 text-center py-3 px-8 text-2xl font-medium rounded-3xl dark:bg-cyan-600 dark:text-gray-300">
    //   {`По запросу "${searchQuery}" ничего не найдено`}
    // </div>
    <div className="text-center pt-32 text-gray-600 text-xl">
      {`По запросу «`}
      <span className="text-sky-400">{searchQuery}</span>
      {`» ничего не найдено`}
    </div>
    // </div>
  );
};

export default SearchNotFound;
