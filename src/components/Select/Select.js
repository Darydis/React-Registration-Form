import React, { useState } from 'react';
import './Select.scss';

const Select = ({ selectName, placeholder }) => {
	const [isShown, setIsShown] = useState(false);
	const languages = ['Русский', 'Английский', 'Китайский', 'Испанский'];
	const [isLanguage, setIsLanguage] = useState();
	return (
		<div
			className="select"
			onClick={() => setIsShown(isShown === true ? false : true)}
		>
			<p>{selectName}</p>
			<div className="select_wrapper">
				<div className="select_icon" />
				<ul tabIndex="1">
					<li className="dropdown" value="NOT SELECTED" selected>
						{isLanguage ? isLanguage : placeholder}
					</li>
					<div className={`list  ${isShown == true ? 'shown' : 'hidden'}`}>
						{languages.map((language, i) => (
							<li onClick={() => setIsLanguage(language)} key={i}>
								{language}
							</li>
						))}
					</div>
				</ul>
			</div>
		</div>
	);
};

export default Select;
