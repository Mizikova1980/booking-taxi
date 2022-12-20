import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ProfileModalClose(params) {
    const navigate = useNavigate()
    
           
    return (
        <div className='form-wrapper'>
            <h1 className='form-title'>Профиль</h1>
            <div className='form-desc'>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
            <button type='submit' className='form-btn' onClick={() => navigate('/map')}>Перейти на карту</button>
            
        </div>
    )
}

