import { createStore} from 'redux'
import reducers from './reducers'
//import middlewares from './middlewares'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

//export const store = createStore(reducers, middlewares)
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)