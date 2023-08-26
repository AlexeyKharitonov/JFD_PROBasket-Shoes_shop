import React from "react";
import PropTypes from "prop-types";

const TextArea = ({
  name,
  label,
  placeholder,
  register,
  rules,
  error,
  rows = 5,
  cols = 30,
}) => {
  return (
    <div className="flex flex-col py-1.5">
      <label className="px-1" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <textarea
          className="border-2 py-1.5 px-3.5 outline-none rounded-xl text-gray-600 w-full"
          name={name}
          placeholder={placeholder}
          // value={text}
          rows={rows}
          cols={cols}
          // onChange={handleTextChange}
          {...register(name, rules)}
        />
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-1 px-1.5">{error.message}</p>
      )}
    </div>
  );
};
TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func,
  rules: PropTypes.object,
  error: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
};

export default TextArea;
