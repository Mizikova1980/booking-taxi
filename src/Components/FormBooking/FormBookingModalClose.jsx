import React from 'react'
import { useNavigate } from 'react-router-dom'
import {closeFormBookingModal} from './../../actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'




export default function FormBookingModalClose() {
    const navigate = useNavigate()
    const {isBookingCompleted} = useSelector(state => state)
    const {coords} = useSelector(state => state.booking )
    const dispatch = useDispatch()
   
    function closeModal (e) {
        e.preventDefault()
        console.log(12321)
        dispatch(closeFormBookingModal())
        console.log(656544)
        console.log(coords)

    } 
    
    return (
        <div className='map-container'>
            <div className='form-wrapp' >
                <h1 className='form-title'>Заказ размещен</h1>
                <div className='form-desc'>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
                <button className='form-btn btn-close' type='submit'onClick={closeModal}>Сделать новый заказ</button>
            </div>
        </div>
    )
};
