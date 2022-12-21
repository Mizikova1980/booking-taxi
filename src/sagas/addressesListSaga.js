import { fetchAddressesSuccess, FETCH_ADDRESSES_REQUEST } from "../actions"
import {fetchAddresses} from './../api'
import {takeEvery, call, put} from 'redux-saga/effects'


export function* fetchAddressListSaga (action) {
    
    const {addresses} = yield call(fetchAddresses)
    if (addresses) {
        yield put (fetchAddressesSuccess(addresses))
    }
     
    
}


export  function* addressesListSaga () {
    yield takeEvery(FETCH_ADDRESSES_REQUEST, fetchAddressListSaga)
}