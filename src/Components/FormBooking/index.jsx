import React from 'react'
import BookingForm from './BookingForm'
import FormBookingModalClose from './FormBookingModalClose'
import { useSelector } from 'react-redux';


function  FormBooking  (events) {
 const {isBookingCompleted} = useSelector(state => state.booking)
 
  return (
    <div className='wrapper'>
        {isBookingCompleted ? <FormBookingModalClose/> : <BookingForm/>}
    </div>
       
    )
  
 
}

export default FormBooking