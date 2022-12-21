import { combineReducers } from "redux"
import auth from "./auth"
import addressesList from './addressesList'
import regCard from "./regCard"
import booking from './booking'

export default combineReducers({
    auth,
    regCard,
    addressesList,
    booking
})