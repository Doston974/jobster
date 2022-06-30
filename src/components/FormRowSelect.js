import React from "react";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="form-row ">
      <label htmlFor={name} className="form-label ">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className='border-2 border-gray-300 rounded bg-gray-50 py-1 p-2 outline-none'
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue} className=''>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
