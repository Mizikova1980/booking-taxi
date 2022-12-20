import { createAction } from "redux-actions"



export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REG = 'REG'
export const REG_CARD='REG_CARD'
export const REGCARD_SUCCESS = 'REGCARD_SUCСESS'
export const fetchAddressesRequest = createAction('FETCH_ADDRESSES_REQUEST')
export const fetchAddressesSuccess = createAction('FETCH_ADDRESSES_SUCCESS')
export const fetchAddressesFailure = createAction('FETCH_ADDRESSES_FAILURE')


export const logIn = (token) => ({type: LOG_IN, payload: {token}})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload:{email, password}})
export const registration = (email, password, name) => ({type: REG, payload: {email, password} })
export const registrationCard = (cardNumber, expiryDate, cardName, cvc, token) => ({type: REG_CARD, payload: {cardNumber, expiryDate, cardName, cvc, token}})
export const regCardSuccess =() => ({type: REGCARD_SUCCESS})
