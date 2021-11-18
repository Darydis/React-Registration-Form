import React from 'react';
import './Checkbox.scss';

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
				<label className={value === 1 && 'checked'} htmlFor={id}></label>
			</div>

			<span>
				Принимаю <a href="/">условия</a> использования
			</span>
		</div>
	);
};

export default Checkbox;
