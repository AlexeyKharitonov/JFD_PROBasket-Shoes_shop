import React, { useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

const TextField = ({
  name,
  label,
  type = "text",
  placeholder,
  register,
  rules,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col py-1.5">
      <label className="px-1" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          className="border-2 py-1.5 px-3.5 outline-none pr-10 rounded-xl text-gray-600 w-full"
          type={showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          {...register(name, rules)}
        />
        {type === "password" && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <button
              className="bg-transparent px-2 border-0"
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <BsEyeFill size={27} color="#0f6fd1" />
              ) : (
                <BsEyeSlashFill size={27} color="#0f6fd1" />
              )}
            </button>
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-600 text-sm mt-1 px-1.5">{error.message}</p>
      )}
    </div>
  );
};

export default TextField;
