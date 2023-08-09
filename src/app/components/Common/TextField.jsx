import React from "react";

const TextField = ({
  name,
  label,
  type = "text",
  placeholder,
  register,
  rules,
  error,
  // onBlur,
}) => {
  return (
    <div className="flex flex-col py-2.5">
      <label className="px-1 " htmlFor={name}>
        {label}
      </label>
      <input
        className="border-2 py-2 px-3.5 outline-0 rounded-xl text-gray-600"
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, rules)}
        // onBlur={onBlur}
      />
      {error && (
        <p className="text-red-600 text-sm mt-1 px-1.5">{error.message}</p>
      )}
    </div>
  );
};

export default TextField;
