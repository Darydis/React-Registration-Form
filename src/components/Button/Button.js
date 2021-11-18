import './Button.scss';

const Button = ({ name, error, checked }) => {
	return (
		<div className="button">
			<button
				className={`${
					error &&
					error.name === null &&
					error.number === null &&
					error.email === null &&
					checked === 1
						? 'active'
						: 'disabled'
				}
        `}
			>
				{name}
			</button>
		</div>
	);
};

export default Button;
