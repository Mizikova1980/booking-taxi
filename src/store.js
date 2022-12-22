import { createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import reducers from './reducers'
//import middlewares from './middlewares'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from 'redux'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
   };

const pReducer = persistReducer(persistConfig, reducers);

//export const store = createStore(reducers, middlewares)
export const store = createStore(pReducer, applyMiddleware(sagaMiddleware))
export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)