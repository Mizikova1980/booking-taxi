import {LOG_IN, LOG_OUT, BOOKING_COMPLETED, BOOKING_COMPLETED_SUCCESS, CLOSE_FORM_BOOKING_MODAL}  from './../actions'



const defaultState = {
	authToken: '',
	isLoggedIn: false,
	isBookingCompleted: false,
	addresses: [],
	coords: []
	
};


function auth(state = defaultState, action){
	switch (action.type) {
		case LOG_IN: {
			return {...state, isLoggedIn: true, authToken:action.payload, isBookingCompleted: false, addresses:action.payload }
		} 
		case LOG_OUT: {
			return {...state, isLoggedIn: false, isBookingCompleted: false}
		}
		case BOOKING_COMPLETED: {
			return {...state, isBookingCompleted: true, isLoggedIn: true, authToken:action.payload, addresses:action.payload}
		} 
		case BOOKING_COMPLETED_SUCCESS: {
			return {...state, isBookingCompleted: true, coords: action.payload}
		}
		case CLOSE_FORM_BOOKING_MODAL: {
			return {...state, isBookingSuccess: false, isBookingCompleted: false}
		} 
		default: return state
	}
}

export default auth