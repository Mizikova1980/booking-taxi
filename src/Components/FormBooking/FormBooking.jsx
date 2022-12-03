import React from 'react'
import { Input } from '@mui/material'

export default function FormBooking() {
      
    
    return (
        <div className='map-container'>
            <form className='form-booking'> 
                 <div className='route'>
                    <div className='label-wrap'>
                        <label htmlFor='from' className=''>
                             <Input id='from' type='' name='from' className='form-input' placeholder='Откуда'/>
                        </label>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='to' className=''>
                        <Input id='to' type='' name='to' className='form-input' placeholder='Куда'/>
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
                <button type='submit' className='form-btn'>Заказать</button>
            </form>
        </div>
    )
};
