import PropTypes from "prop-types";

const CounterInCart = ({ count }) => {
  return (
    count > 0 && (
      <div className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5  lg:w-6 lg:h-6 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#D96259] text-white rounded-full  flex items-center justify-center text-sm">
        {count}
      </div>
    )
  );
};
CounterInCart.propTypes = {
  count: PropTypes.number.isRequired,
};

export default CounterInCart;
