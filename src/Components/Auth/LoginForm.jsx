import React from 'react';
import { Input } from '@mui/material'



export default function LoginForm(events) {

    const {changeSing} = events
    
    return (
        
        <div className='form-login'>
            <h1 className='form-title'>Войти</h1>
            <label htmlFor="email" className='label-login'>Email</label>
            <Input id='email' type='email' name='email'className='form-input' placeholder='mail@mail.ru' required></Input>
            <label htmlFor="password" className='label-login'>Пароль</label>
            <Input id='password' type='password' name='password' className='form-input' placeholder='***************' required></Input>
            <div className='forgotPassword'>Забыли пароль?</div>
            <button type='submit' className='form-btn'>Войти</button>
            <div className='auth-link'>
                <span className='link-text' data-link='change-sing' onClick={changeSing}>
                Новый пользователь?
                </span>
                <span className='link'>
                Регистрация
                </span>
            </div>
        </div>
    )
};

