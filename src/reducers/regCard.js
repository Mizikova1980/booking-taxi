import {REGCARD_SUCCESS, CLOSE_FORM_PROFILE_MODAL}  from './../actions'



const defaultState = {
	  
	isRegCard: false,
};


function regCard (state = defaultState, action){
	switch (action.type) {
		case REGCARD_SUCCESS: {
			return {...state, isRegCard: true}
		} 
		case CLOSE_FORM_PROFILE_MODAL: {
			return {...state, isRegCard: false}
		}
		default: return state
	}
}

export default regCard