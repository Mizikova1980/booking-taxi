import React from 'react';

export default function LoginForm({setLogin}) {
    
    return (
        
                <form className='form-login'onSubmit={() => setLogin(true)}>
                    <h1 className='form-title'>Войти</h1>
                    <label htmlFor="email" className='label-login'>Email</label>
                    <input id='email' type='email' name='email'className='form-input' placeholder='mail@mail.ru'></input>
                    <label htmlFor="password" className='label-login'>Пароль</label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='***************'></input>
                    <div className='forgotPassword'>Забыли пароль?</div>
                    <button type='submit' className='form-btn'>Войти</button>
                    <div className='auth-link'>
                        <span className='link-text'>
                            Новый пользователь?
                        </span>
                        <span className='link'>
                            Регистрация
                        </span>
                    </div>
            </form>
                
        
        
        
        
       
    )
};