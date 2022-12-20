import { fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure } from "./../actions"
import {fetchAddressList} from './../api'
import {takeEvery, call, put} from 'redux-saga/effects'


export function* fetchAddressListSaga (action) {
    try {
        const {error, data} = yield call(fetchAddressList);
        if(!error) yield put(fetchAddressesSuccess(data.addresses));
        if(error) yield put(fetchAddressesFailure(error))
    } catch (error){
        yield put(fetchAddressesFailure(error))
    }
}


export  function* addressListSaga () {
    yield takeEvery(fetchAddressesRequest.toString(), fetchAddressListSaga)
}