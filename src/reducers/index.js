import { combineReducers } from "redux"
import auth from "./auth"
import addresses from './addressesList'
import regCard from "./regCard"

export default combineReducers({
    auth,
    regCard,
    addresses
})