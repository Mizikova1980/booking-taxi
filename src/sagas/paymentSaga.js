import { regCardSuccess, REG_CARD } from "./../actions"
import {regCard} from './../api'
import {takeEvery, call, put} from 'redux-saga/effects'


export function* regCardSaga (action) {
    const {cardNumber, expiryDate, cardName, cvc,token} = action.payload
    const {success} = yield call (regCard, cardNumber, expiryDate, cardName, cvc,token)
    if (success) {
        yield put (regCardSuccess())
    }
   
}


export  function* paymentSaga () {
    yield takeEvery(REG_CARD, regCardSaga)
}