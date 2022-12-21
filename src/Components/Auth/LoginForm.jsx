import React from 'react';
import { Input } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {fetchAddressesList} from './../../actions.js'


export default function LoginForm(events) {
  const dispatch = useDispatch();
    const navigate = useNavigate()
    const registration = () => navigate('/registration') 
    

    function fetch (e) {
        dispatch(fetchAddressesList())
    }
    
    return (
        
        <div className='form-login' onClick={fetch}>
            <h1 className='form-title'>Войти</h1>
            <label htmlFor="email" className='label-login'>Email</label>
            <Input id='email' type='email' name='email'className='form-input' placeholder='mail@mail.ru' required></Input>
            <label htmlFor="password" className='label-login'>Пароль</label>
            <Input id='password' type='password' name='password' className='form-input' placeholder='***************' required></Input>
            <div className='forgotPassword'>Забыли пароль?</div>
            <button type='submit' className='form-btn'>Войти</button>
            <div className='auth-link'>
                <span className='link-text' data-link='change-sing' onClick={registration}>
                Новый пользователь?
                </span>
                <span className='link'>
                Регистрация
                </span>
            </div>
        </div>
    )
};

