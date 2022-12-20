import { fetchAddressSuccess, FETCH_ADDRESSES_REQUEST } from "../actions"
import {fetchAddresses} from './../api'
import {takeEvery, call, put} from 'redux-saga/effects'


export function* fetchAddressListSaga (action) {
    
    const {addresses} = yield call(fetchAddresses)
    console.log(addresses)
    if (addresses) {
        yield put (fetchAddressSuccess(addresses))
    }
     
    
}


export  function* addressesListSaga () {
    yield takeEvery(FETCH_ADDRESSES_REQUEST, fetchAddressListSaga)
}