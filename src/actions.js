import { createAction } from "redux-actions"



export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REG = 'REG'
export const REG_CARD='REG_CARD'
export const REGCARD_SUCCESS = 'REGCARD_SUCСESS'
export const FETCH_ADDRESSES_REQUEST = 'FETCH_ADDRESSES_REQUEST'
export const FETCH_ADDRESSES_SUCCESS = 'FETCH_ADDRESSES_SUCCESS'
export const BOOKING_COMPLETED = 'BOOKING_COMPLETED'
export const BOOKING_COMPLETED_SUCCESS = 'BOOKING_COMPLETED_SUCCESS'
export const CLOSE_FORM_BOOKING_MODAL = 'CLOSE_FORM_BOOKING_MODAL'
export const CLOSE_FORM_PROFILE_MODAL = 'CLOSE_FORM_PROFILE_MODAL'



export const logIn = (token) => ({type: LOG_IN, payload: {token}})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload:{email, password}})
export const registration = (email, password, name) => ({type: REG, payload: {email, password} })
export const registrationCard = (cardNumber, expiryDate, cardName, cvc, token) => ({type: REG_CARD, payload: {cardNumber, expiryDate, cardName, cvc, token}})
export const regCardSuccess =() => ({type: REGCARD_SUCCESS})
export const fetchAddressesList = () => ({type: FETCH_ADDRESSES_REQUEST})
export const fetchAddressesSuccess = (addresses) => ({type: FETCH_ADDRESSES_SUCCESS, payload: addresses})
export const bookingCompleted = (address1, address2) => ({type: BOOKING_COMPLETED, payload: {address1, address2}})
export const bookingSuccess = (coords) => ({type:BOOKING_COMPLETED_SUCCESS, payload: coords})
export const closeFormBookingModal = () => ({type: CLOSE_FORM_BOOKING_MODAL})
export const closeProfileModal = () => ({type: CLOSE_FORM_PROFILE_MODAL})

