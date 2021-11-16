import React from "react";
import "./Select.scss";

const Select = ({
  selectName,
  placeholder,
  options,
  onChange,
  disabled,
  selected,
  error,
}) => {
  return (
    <div className="select">
      <p>{selectName}</p>
      <div className={`select_wrapper ${error && "error"}`}>
        <div className={`select_icon ${error && "error"}`} />
        <select
          className={`${error && "error"}`}
          onChange={onChange}
          disabled={disabled}
        >
          <option value="NOT SELECTED" selected>
            {placeholder}
          </option>
          {options ? (
            options.map((option) => (
              <option key={option} selected={option === selected}>
                {option}
              </option>
            ))
          ) : (
            <>
              <option>1</option>
              <option>2</option>
            </>
          )}
        </select>
        {error && <div className="select_error">{error}</div>}
      </div>
    </div>
  );
};

export default Select;
