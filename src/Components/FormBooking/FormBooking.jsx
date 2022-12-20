import React from 'react'
import Select from '../UI/select'
import { useNavigate } from 'react-router-dom'
import {fetchAddressesRequest} from './../../actions.js'

//import {fetchAddressList} from './../../api.js'



export default function FormBooking() {
    const navigate = useNavigate() 
        
    const selectArr = []
      
    //const getAddressList = fetchAddressList(selectArr)
    //console.log(selectArr)
       
        
    const [selectValue, setSelectValue] = React.useState(null);

    
    return (
        <div className='map-container'>
            <form className='form-booking'> 
                 <div className='route'>
                    <div className='label-wrap' >
                        <label htmlFor='from' className=''>
                            <Select onClick={fetchAddressesRequest} list={selectArr} preview="Откуда" onChange={e => setSelectValue(e.value) }  id='from' type='' name='from'/>
                        </label>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='to' className=''>
                        <Select onClick={fetchAddressesRequest} list={selectArr} preview="Куда" onChange={e => setSelectValue(e.value) } id='to' type='' name='to'/>
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
