import React from 'react';
import { Link } from "react-router-dom";
import Input from './../../components/Input/Input';
import Select from './../../components/Select/Select';
import './Registration.scss'

const Registration = () => {

  return(
    <div className='wrp'>
      <div className='form'>
        <div className='header'>
          <h3>Регистрация</h3>
          <div className='signup'>
            <span>Уже есть аккаунт?</span>
            <span><Link> Войти</Link></span>
          </div>
        </div>
        <div className='fill_fields'>
          <Input inputName='Имя' placeholder='Введите Ваше имя' />
          <Input inputName='Email' placeholder='Введите Ваш email' />
          <Input inputName='Номер телефона' placeholder='Введите номер телефона' />
          <Select selectName='Язык' placeholder='Язык' />

      </div>
      </div>
    </div>
  )
}

export default Registration;