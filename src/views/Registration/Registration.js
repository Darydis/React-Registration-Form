import React from 'react';
import { Link } from "react-router-dom";
import Input from './../../components/Input/Input';
import Select from './../../components/Select/Select';

const Registration = () => {

  return(
    <div className='wrp'>
      <div className='form'>
        <h3>Регистрация</h3>
        <div className='signup'>
          <span>Уже есть аккаунт?</span>
          <Link>Войти</Link>
        </div>
        <Input inputName='Имя' placeholder='Введите Ваше имя' />
        <Input inputName='Email' placeholder='Введите Ваш email' />
        <Input inputName='Номер телефона' placeholder='Введите номер телефона' />
        <Select selectName='Язык' placeholder='Язык' />

      </div>
    </div>
  )
}

export default Registration;