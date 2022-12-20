
import {spawn} from 'redux-saga/effects'
import {authSaga} from './../sagas/authSaga'
import {regSaga} from './../sagas/regSaga'
import {addressesListSaga} from './addressesListSaga'
import {paymentSaga} from './../sagas/paymentSaga'

export default function* rootSaga() {
    yield spawn(authSaga)
    yield spawn(regSaga)
    yield spawn(addressesListSaga)
    yield spawn(paymentSaga)
    }


