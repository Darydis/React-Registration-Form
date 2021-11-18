import React from 'react';
import './Input.scss';

const Input = ({
	id,
	inputName,
	value,
	onChange,
	placeholder,
	disabled,
	error,
}) => {
	return (
		<div className="wrp">
			<div className="input">
				<p>{inputName}</p>
				<div>
					<input
						id={id}
						className={` ${error && 'error'}`}
						type="text"
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						disabled={disabled}
					/>
					{error && <div className="input_error">{error}</div>}
				</div>
			</div>
		</div>
	);
};

export default Input;
