import React from 'react';

export default function Auth() {
    
    return (
            <form className='form-login'>
                    <h1 className='form-title'>Регистрация</h1>
                    <label htmlFor="email" className='label-login'>Email*</label>
                    <input id='email' type='email' name='email'className='form-input' placeholder='mail@mail.ru'></input>
                    <label htmlFor="name" className='label-login'>Как вас зовут?*</label>
                    <input id='name' type='text' name='name'className='form-input' placeholder='Петр Александрович'></input>
                    <label htmlFor="password" className='label-login'>Придумайте пароль*</label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='***************'></input>
                    <div className='forgotPassword'>Забыли пароль?</div>
                    <button type='submit' className='form-btn'>Зарегистрироваться</button>
                    <div className='auth-link'>
                        <span className='link-text'>
                           Уже зарегистрированы?
                        </span>
                        <span className='link'>
                            Войти
                        </span>
                    </div>
            </form>
                        
       
    )
};