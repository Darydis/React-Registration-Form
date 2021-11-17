import React from "react";
import "./Checkbox.scss";

const Checkbox = ({ id, value, onChange }) => {
  return (
    <div className="checkbox-field">
      <div>
        <input
          id={id}
          name={id}
          className="checkbox"
          type="checkbox"
          value={value}
          onChange={onChange}
        />
        <label className={value && "checked"} htmlFor={id}></label>
      </div>
      <div>
        <span>Принимаю <a href='/'>условия</a> использования</span>
      </div>
    </div>
  );
};

export default Checkbox;
