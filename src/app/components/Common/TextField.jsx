import React from "react";

const TextField = ({ name, label, type, value, placeholder, onChange }) => {
  return (
    <div className="flex flex-col py-2.5">
      <label className="px-1" htmlFor={name}>
        {label}
      </label>
      <input
        className="border-2 py-2.5 px-3.5 outline-0 rounded-xl"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
