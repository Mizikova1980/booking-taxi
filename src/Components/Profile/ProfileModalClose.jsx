import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {closeProfileModal} from './../../actions'


export default function ProfileModalClose(params) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function closeModal (e) {
        e.preventDefault()
        dispatch(closeProfileModal())
        navigate('/')
    }

           
    return (
        <div className='form-wrapper' >
            <h1 className='form-title'>Профиль</h1>
            <div className='form-desc'>Платёжные данные обновлены. Теперь вы можете заказывать такси.</div>
            <button type='submit' className='form-btn' onClick={closeModal} >Перейти на карту</button>
            
        </div>
    )
}

