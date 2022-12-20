import {REGCARD_SUCCESS}  from './../actions'



const defaultState = {
	  
	isRegCard: false,
};


function regCard (state = defaultState, action){
	switch (action.type) {
		case REGCARD_SUCCESS: {
			return {...state, isRegCard: true}
		} 
		
		default: return state
	}
}

export default regCard