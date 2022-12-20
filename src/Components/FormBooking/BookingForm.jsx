import React, {useEffect, useState} from 'react'
import Select from '../UI/select'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAddressesList} from './../../actions.js'
//import {fetchAddresses} from './../../api.js'



export default function BookingForm() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const selectArr = []
    function fetch (e) {
        console.log('ghb')
        dispatch(fetchAddressesList())
        console.log('oihrgaih')
        
    }
    
    const addresses = useSelector(state => state.addresses)
    console.log(addresses)
        
    const [selectValue, setSelectValue] = React.useState(null);
   
    
    return (
        <div className='map-container'>
            <form className='form-booking' onClick={fetch}> 
                 <div className='route'>
                    <div className='label-wrap' >
                        <label htmlFor='from' className=''>
                            <Select list={selectArr} preview="Откуда" onChange={e => setSelectValue(e.value) }  id='from' type='' name='from'/>
                        </label>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='to' className=''>
                        <Select list={selectArr} preview="Куда" onChange={e => setSelectValue(e.value) } id='to' type='' name='to'/>
                    </label>
                    </div>
                </div>
                <div className='cars'>
                    <div className='cars__item'>
                        <div className='rate'>Стандарт</div>
                        <p>Стоимость</p>
                        <div className='price'>150 ₽</div>
                        <img src="./images/1ff4d95ab87a44089a781d6f8057d13a 1.png" alt='standart'/>
                    </div>
                    <div className='cars__item'>
                        <div className='rate'>Премиум</div>
                        <p>Стоимость</p>
                        <div className='price'>250 ₽</div>
                        <img src='./images/53151 1.png' alt='premium'/>
                    </div>
                    <div className='cars__item'>
                        <div className='rate'>Бизнес</div>
                        <p>Стоимость</p>
                        <div className='price'>300 ₽</div>
                        <img src='./images/697e180d4d938fea2423b805aa7205b8 1.png' alt='business'/>
                    </div>
                  
                </div>
                <button type='submit' className='form-btn' onClick={() => navigate('/bookingComplited')}>Заказать</button>
            </form>
        </div>
    )
};
