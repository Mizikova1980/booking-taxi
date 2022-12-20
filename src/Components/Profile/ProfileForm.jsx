import React, {useState} from 'react'
import { Input } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {registrationCard} from './../../actions.js'

const placeHolder = (preview, value, simbol) => {
    Array.from(value).forEach(el => preview = preview.replace(simbol, el) )
  
    return preview.replace(/(\d?)\D+$/, "$1")
  }
  
  
  
  const regCard = (value) => placeHolder("**** **** **** ****", value.replace(/\D/g, ""), "*")
  
  const regDate = (value) => placeHolder("**/**", value.replace(/\D/g, ""), "*")
  
  const regCVC = (value) => value.replace(/\D/g, "").substr(0, 3)
  
  const regName = (value) => value.replace(/\d/g, "")

  

export default function ProfileForm(params) {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state.auth)
    
    
        const [name, setName] = useState("")
        const [card, setCard] = useState("")
        const [date, setDate] = useState("")
        const [cvc, setCvc] = useState("")

        function send(e){
            e.preventDefault();
            let cardNumber = Number(card.split(' ').join(''));
            let mm = Number(date.split('/')[0]);
            let yy = Number(date.split('/')[1]);
            let expiryDate=mm+'/'+yy
            let cardName = name
            dispatch(registrationCard(cardNumber, expiryDate, cardName, cvc, token))
          }
    
    return (
        <div className='form-wrapper'>
            <h1 className='form-title'>Профиль</h1>
            <div className='form-desc'>Введите платежные данные</div>
            <form className='form-profile' autoComplete='off' onSubmit={send}>
                <div className='form-profile form-profile__items items'>
                <div className='item-left'>
                    <div className='label-wrap'>
                        <label htmlFor='userName' className='form-label'>Имя владельца</label>
                        <Input value={name} onChange={(e) => setName(regName(e.target.value))} id='userName' type='name' name='userName' className='form-input'/>
                    </div>
                    <div className='label-wrap'>
                        <label htmlFor='userCard' className='form-label'>Номер карты</label>
                        <Input value={card} onChange={e => setCard(regCard(e.target.value))} id='userCard' type='' name='userCard' className='form-input'/>
                    </div>
                    <div>
                    <div className='label-wrap label-wrap__inline'>
                        <div className='label-wrap label-wrap__mr'>
                            <label htmlFor='cardDate' className='form-label'>MM/YY</label>
                            <Input value={date} onChange={e => setDate(regDate(e.target.value))} id='cardDate' type='text' name='cardDate' className='form-input'/>
                        </div>
                        <div className='label-wrap'>
                            <label htmlFor='cardCVC' className='form-label'>CVC</label>
                            <Input value={cvc} onChange={e => setCvc(regCVC(e.target.value))} id='cardCVC' type='text' name='cardCVC' className='form-input'/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='item-right'>
                    <div className='cardView'>
                        <div className="cardView__date">
                            <div >
                            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 14.5863 32.6742 12.7487 32.0751 11.0396L11.0396 32.0751C12.7487 32.6742 14.5863 33 16.5 33ZM3.16676 26.2217L11.2627 18.1258L1.91481 8.7779C0.692428 11.0819 0 13.7101 0 16.5C0 20.1349 1.17536 23.4952 3.16676 26.2217ZM8.7779 1.91481L18.1258 11.2627L26.2217 3.16676C23.4952 1.17536 20.1349 0 16.5 0C13.7101 0 11.0819 0.692428 8.7779 1.91481Z" fill="#FDBF5A"/>
                            </svg>
                            </div>
                            <div className='card-date'>{date}</div>
                        </div>
                            <div className='card-number'>{card}</div>
                        <div>
                            <div className='cardView__icons'>
                                <div className='cardView__icons ardView__icons--left'>
                                    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 26.5H17.5V4.5H29C29.1667 3.33333 28.5 0.8 24.5 0H11.5V26.5Z" fill="#E1E1E1"/>
                                        <path d="M3 0H9V4.5H0C0 3.33333 0.6 0.8 3 0Z" fill="#E1E1E1"/>
                                        <path d="M3 26H9V21.5H0C0 22.6667 0.6 25.2 3 26Z" fill="#E1E1E1"/>
                                        <path d="M26 26H20V21.5H29C29 22.6667 28.4 25.2 26 26Z" fill="#E1E1E1"/>
                                        <path d="M0 6.5H9V11.5H0V6.5Z" fill="#E1E1E1"/>
                                        <path d="M20 6.5H29V11.5H20V6.5Z" fill="#E1E1E1"/>
                                        <path d="M0 13.5H9V18.5H0V13.5Z" fill="#E1E1E1"/>
                                        <path d="M20 13.5H29V18.5H20V13.5Z" fill="#E1E1E1"/>
                                    </svg>
                                </div>

                                <div className='cardView__icons cardView__icons--right'>
                                    <div>
                                        <svg id="icon1" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g >
                                                <circle cx="14" cy="14" r="14" fill="#F1F1F1"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg id="icon2"width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g >
                                                <circle cx="14" cy="14" r="14" fill="#F1F1F1"/>
                                            </g>
                                        </svg>
                                    </div>                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
                
                <button type='submit' className='form-btn'>Сохранить</button>
            </form>
        </div>
    )
}

