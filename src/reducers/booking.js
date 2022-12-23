import {BOOKING_COMPLETED, BOOKING_COMPLETED_SUCCESS, CLOSE_FORM_BOOKING_MODAL}  from '../actions'



const defaultState = {
	coords: [],  
	isBookingCompleted: false,
	isBookingSuccess:false,
	isNewRoute:false
};


function booking (state = defaultState, action){
	switch (action.type) {
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

export default booking