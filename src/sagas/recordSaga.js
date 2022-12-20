import { runSaga } from "redux-saga"

export const recordSaga = async (saga, initialActions=null) => {
    const dispatched = []
    await runSaga ({
        dispatch: (action) => dispatched.push(action)
    },
    saga,
    initialActions).done
    return dispatched
}