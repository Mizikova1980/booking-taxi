import {FETCH_ADDRESSES_SUCCESS}  from '../actions'



const defaultState = {
    addresses: [],
}

const addressesList = (state = defaultState, action) => {
    switch (action.type) {
		case FETCH_ADDRESSES_SUCCESS: {
			return {...state, addresses:action.payload }
		} 
		

		default: return state
	}
}

export default addressesList