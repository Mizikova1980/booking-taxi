import {LOG_IN, LOG_OUT, BOOKING_COMPLETED, BOOKING_COMPLETED_SUCCESS, CLOSE_FORM_BOOKING_MODAL}  from './../actions'



const defaultState = {
	authToken: '',
	isLoggedIn: false,
	isBookingCompleted: false,
	isBookingSuccess: false,
	isNewRoute:false,
	addresses: [],
	coords: []
	
};


function auth(state = defaultState, action){
	switch (action.type) {
		case LOG_IN: {
			return {...state, isLoggedIn: true, authToken:action.payload, addresses:action.payload }
		} 
		case LOG_OUT: {
			return {...state, isLoggedIn: false}
		}
		case BOOKING_COMPLETED: {
			return {...state, isBookingCompleted: true}
		} 
		case BOOKING_COMPLETED_SUCCESS: {
			return {...state, isBookingSuccess: true, isBookingCompleted: true, coords: action.payload}
		}
		case CLOSE_FORM_BOOKING_MODAL: {
			return {...state, isBookingSuccess: false, isBookingCompleted: false, isNewRoute:true, coords: []}
		}
		default: return state
	}
}

export default auth