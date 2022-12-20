import React from 'react'
import BookingForm from './BookingForm.css'
import FormBookingModalClose from './FormBookingModalClose'
import { useSelector } from 'react-redux';


function  FormBooking  (events) {
 const {isBookingCompleted} = useSelector(state => state.regCard)
 
  return (
    <div className='wrapper'>
        {isBookingCompleted ? <FormBookingModalClose/> : <BookingForm/>}
    </div>
       
    )
  
 
}

export default FormBooking