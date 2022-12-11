import {logIn, REG} from './../actions';
import {serverRegister} from './../api';


export const regMiddleware = (store) => (next) => async (action) => {
	if(action.type === REG){
		const {email, password, name} = action.payload;
		const success = await serverRegister(email, password, name)
          
        if (success) {
                store.dispatch(logIn())
            }
		
	} 
	else	{
        next(action)
    }
}