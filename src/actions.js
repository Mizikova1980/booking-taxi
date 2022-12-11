export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const AUTHENTICATE = 'AUTHENTICATE'
export const REG = 'REG'

export const logIn = () => ({type: LOG_IN})
export const logOut = () => ({type: LOG_OUT})
export const authenticate = (email, password) => ({type: AUTHENTICATE, payload:{email, password}})
export const registration = (email, password, name) => ({type: REG, payload: {email, password} })