import { bookingSuccess, BOOKING_COMPLETED } from "./../actions"
import {fetchRoute} from './../api'
import {takeEvery, call, put} from 'redux-saga/effects'


export function* getCoords (action) {
    const {address1, address2} = action.payload
    const data = yield call (fetchRoute, address1, address2)
    console.log(data)
    if (data) {
        yield put (bookingSuccess(data))

    }
   
}


export  function* bookingSaga () {
    yield takeEvery(BOOKING_COMPLETED, getCoords)
}