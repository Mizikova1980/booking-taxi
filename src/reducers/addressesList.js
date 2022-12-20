import {FETCH_ADDRESSES_REQUEST}  from '../actions'



const defaultState = {
    addresses: [],
}

const addresses = (state = defaultState, action) => {
    switch (action.type) {
		case FETCH_ADDRESSES_REQUEST: {
			return {...state, addresses:action.payload }
		} 
		

		default: return state
	}
}

export default addresses