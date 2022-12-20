
import {spawn} from 'redux-saga/effects'
import {authSaga} from './../sagas/authSaga'
import {regSaga} from './../sagas/regSaga'
import {addressListSaga} from './../sagas/addressListSaga'
import {paymentSaga} from './../sagas/paymentSaga'

export default function* rootSaga() {
    yield spawn(authSaga)
    yield spawn(regSaga)
    yield spawn(addressListSaga)
    yield spawn(paymentSaga)
    }


