import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectField = ({
  name,
  label,
  opts,
  value,
  placeholder,
  register,
  setValue,
  isMulti = true,
  onChange,
  error,
}) => {
  const options = opts.map((opt) => ({ label: opt, value: opt }));

  const selectedOptions = value
    ? value.map((v) => ({ label: v, value: v }))
    : [];

  const handleSelect = (option) => {
    if (isMulti) {
      const values = option ? option.map((opt) => opt.value) : [];
      setValue(name, values);
      onChange && onChange(values);
    } else {
      setValue(name, option ? option.value : "");
      onChange && onChange(option ? option.value : "");
    }
  };

  const Styles = {
    control: (base) => ({
      ...base,
      borderRadius: "12px",
    }),
  };

  return (
    <div className="flex flex-col py-1.5 ">
      <label className="px-1" htmlFor={name}>
        {label}
      </label>
      <Select
        className="border-2 text-gray-600"
        name={name}
        placeholder={placeholder}
        styles={Styles}
        value={selectedOptions}
        onChange={handleSelect}
        options={options}
        isMulti={isMulti}
      />
      {error && (
        <span className="text-red-600 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
};
SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  opts: PropTypes.arrayOf(PropTypes.node).isRequired,
  value: PropTypes.arrayOf(PropTypes.node).isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default SelectField;
