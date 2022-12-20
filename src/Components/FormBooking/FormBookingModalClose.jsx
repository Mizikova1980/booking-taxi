import React from 'react'
import { useNavigate } from 'react-router-dom'




export default function FormBookingModalClose() {
    const navigate = useNavigate() 
    
    return (
        <div className='map-container'>
            <div className='form-wrapp'>
                <h1 className='form-title'>Заказ размещен</h1>
                <div className='form-desc'>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
                <button className='form-btn btn-close' type='submit'onClick={() => navigate('/booking')}>Сделать новый заказ</button>
            </div>
        </div>
    )
};
