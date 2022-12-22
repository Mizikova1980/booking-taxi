import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {bookingCompleted} from './../../actions'
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete'

const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option: OptionType) => option.text,
  });
  



export default function BookingForm() {
    const addresses = useSelector(state => state.addressesList)
    const dispatch = useDispatch();
    const {isBookingCompleted} = useSelector(state => state.booking)

    
    const selectArr = [
        {text: addresses.addresses[0], value: '0'},
        {text: addresses.addresses[1], value: '1'},
        {text: addresses.addresses[2], value: '2'},
        {text: addresses.addresses[3], value: '3'},
    ]
 

    const [selectText1, setSelectText1] = React.useState(null);
    const [selectText2, setSelectText2] = React.useState(null);


    function Address1 (props) {
        const from ="Откуда"
          return (
            <Autocomplete
              options={selectArr}
              getOptionLabel={(option) => option.text}
              filterOptions={filterOptions}
              filterSelectedOptions={true}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} placeholder={from} />}
            />
          
          );
      }
      function Address2 (props) {
        const to =""
          return (
            <Autocomplete
              options={selectArr}
              getOptionLabel={(option) => option.text}
              filterOptions={filterOptions}
              filterSelectedOptions={true}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} placeholder={to} />}
            />
          
          );
      }

      interface OptionType {
        text: string;
        value: number;
      }


    function send(e){
        e.preventDefault();
        const address1 = selectText1
        const address2 = selectText2
        dispatch(bookingCompleted(address1, address2))
        console.log(isBookingCompleted)
        
      }
    
    return (
        <div className='map-container' >
            <form className='form-booking' onSubmit={send}  > 
                 <div className='route' >
                    <div className='label-wrap'  >
                        <label htmlFor='from' className=''>
                            <Address1 onChange={e => setSelectText1(e.text)}  id='from' type='' name='from' />
                        </label>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='to' className=''>
                        <Address2  onChange={e => setSelectText2(e.text) } id='to' type='' name='to'/>
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
                <button type='submit' className='form-btn' >Заказать</button>
            </form>
        </div>
    )
};
