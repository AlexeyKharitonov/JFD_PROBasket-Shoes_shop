const FormatPrice = ({ price }) => {
  const format = (price) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(price);
  };

  return (
    <div className="text-center">
      <span className="inline-block opacity-70 text-lg mx-3 font-bold text-blue-800 border-2 border-gray-300 p-2.5 rounded-xl">
        {format(Number(price))}
      </span>
    </div>
  );
};

export default FormatPrice;
