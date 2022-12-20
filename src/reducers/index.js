import { combineReducers } from "redux"
import auth from "./auth"
import adressesList from './adressesList'
import regCard from "./regCard"

export default combineReducers({
    auth,
    regCard,
    adressesList
})