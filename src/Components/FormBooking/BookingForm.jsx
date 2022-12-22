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
 

    const [selectText1, setSelectText1] = React.useState('Откуда');
    const [selectText2, setSelectText2] = React.useState('Куда');
    
    

    

    function Address1 () {
        const from ="Откуда"
          return (
            <Autocomplete
              options={selectArr}
              getOptionLabel={(option) => option.text}
              filterOptions={filterOptions}
              onChange={e => setSelectText1(e.target.textContent)}
              filterSelectedOptions={true}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} placeholder={from} />}
            />
          
          );
      }
      function Address2 () {
        const to ="Куда"
          return (
            <Autocomplete
              
              options={selectArr}
              getOptionLabel={(option) => option.text}
              filterOptions={filterOptions}
              filterSelectedOptions={true}
              onChange={e => setSelectText2(e.target.textContent)}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params}  placeholder={to}/>}
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
        console.log(address1, address2)


    }
    
    return (
        <div className='map-container' >
            <form className='form-booking' onSubmit={send}  > 
                 <div className='route' >
                    <div className='label-wrap'  >
                        <label htmlFor='from' className=''>
                            <Address1 />
                        </label>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='to' className=''>
                        <Address2 />
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