import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button.js/Button';
import Checkbox from '../../components/Сheckbox/Checkbox';
import Input from './../../components/Input/Input';
import Select from './../../components/Select/Select';
import './Registration.scss';

const Registration = () => {
	const [error, setError] = useState({});
	const checkError = 'Введено некорректное значение';
	const [isChecked, setIsChecked] = useState(0);
	const inputAndCheckNumber = (id, value) => {
		if (
			value &&
			!value.match(/^(\+?7|8)?\-?\(?9\d{2}\)?\-?\d{3}\-?\d{2}\-?\d{2}$/)
		) {
			setError({ ...error, [id]: checkError });
		} else {
			setError({ ...error, [id]: null });
		}
	};
	const inputAndCheckEmail = (id, value) => {
		if (
			value &&
			!value.match(
				/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
			)
		) {
			setError({ ...error, [id]: checkError });
		} else {
			setError({ ...error, [id]: null });
		}
	};
	const inputAndCheckName = (id, value) => {
		if (value && !value.match(/^[\s\-A-Za-zА-Яа-яЁё]+$/)) {
			setError({ ...error, [id]: checkError });
			console.log('errorr in name>>>', error);
		} else {
			setError({ ...error, [id]: null });
		}
	};
	return (
		<div className="wrp">
			<div className="form">
				<div className="header">
					<h3>Регистрация</h3>
					<div className="signup">
						<span>Уже есть аккаунт?</span>
						<span>
							<Link> Войти</Link>
						</span>
					</div>
				</div>
				<div className="fill_fields">
					<Input
						inputName="Имя"
						placeholder="Введите Ваше имя"
						error={error['name']}
						onChange={(e) => inputAndCheckName('name', e.target.value)}
					/>
					<Input
						inputName="Email"
						placeholder="Введите Ваш email"
						error={error['email']}
						onChange={(e) => inputAndCheckEmail('email', e.target.value)}
					/>
					<Input
						inputName="Номер телефона"
						placeholder="Введите номер телефона"
						error={error['number']}
						onChange={(e) => inputAndCheckNumber('number', e.target.value)}
					/>
					<Select selectName="Язык" placeholder="Язык" />
					<Checkbox onChange={() => console.log('change')} />
					<Button checked={isChecked} error={error} name="Зарегистрироваться" />
				</div>
			</div>
		</div>
	);
};

export default Registration;
