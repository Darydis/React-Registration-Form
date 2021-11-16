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
  const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
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
         
          {languages.map((language, i) => (
            <option key={i} selected={language === selected}>
              {language}
            </option>
          ))}
          
        </select>
        {error && <div className="select_error">{error}</div>}
      </div>
    </div>
  );
};

export default Select;
