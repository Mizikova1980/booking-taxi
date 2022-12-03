import React from 'react';
import { Input } from '@mui/material'

export default function Auth(events) {
    const {changeSing} = events;
    return (
            <div className='form-login'>
                    <h1 className='form-title'>Регистрация</h1>
                    <label htmlFor="email" className='label-login'>Email*</label>
                    <Input id='email' type='email' name='email'className='form-input' placeholder='mail@mail.ru'></Input>
                    <label htmlFor="name" className='label-login'>Как вас зовут?*</label>
                    <Input id='name' type='text' name='name'className='form-input' placeholder='Петр Александрович'></Input>
                    <label htmlFor="password" className='label-login'>Придумайте пароль*</label>
                    <Input id='password' type='password' name='password' className='form-input' placeholder='***************'></Input>
                    <div className='forgotPassword'>Забыли пароль?</div>
                    <button type='submit' className='form-btn'>Зарегистрироваться</button>
                    <div className='auth-link'>
                        <span className='link-text' data-link='change-sing' onClick={changeSing}>
                           Уже зарегистрированы?
                        </span>
                        <span className='link'>
                            Войти
                        </span>
                    </div>
            </div>
                        
       
    )
};