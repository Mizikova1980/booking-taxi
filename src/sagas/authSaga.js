import { logIn, AUTHENTICATE } from "./../actions"
import {serverLogin} from './../api'
import {takeEvery, call, put} from 'redux-saga/effects'


export function* authenticateSaga (action) {
    const {email, password} = action.payload
    const {success, token} = yield call (serverLogin, email, password)
    console.log(success, token)
    if (success) {
        yield put (logIn(token))
        
    }
   
}


export  function* authSaga () {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}