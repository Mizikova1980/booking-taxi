import {logIn, REG} from './../actions';
import {serverRegister} from './../api';
import {takeEvery, call, put} from 'redux-saga/effects'


export function* registrationSaga (action) {
    const {email, password, name} = action.payload
    const success = yield call (serverRegister, email, password, name)
    if (success) {
        yield put (logIn())
    }
}


export  function* regSaga () {
    yield takeEvery(REG, registrationSaga)
}