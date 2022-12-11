import {LOG_IN, LOG_OUT}  from './../actions'



const defaultState = {
	authToken: '',
	isLoggedIn: false,
};


function auth(state = defaultState, action){
	switch (action.type) {
		case LOG_IN: {
			return {...state, isLoggedIn: true}
		} 
		case LOG_OUT: {
			return {...state, isLoggedIn: false}
		} 

		default: return state
	}
}

export default auth