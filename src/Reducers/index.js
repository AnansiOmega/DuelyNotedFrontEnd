import { combineReducers } from 'redux'
import notes from './notes'
import search from './search'
import auth from './auth'


export default combineReducers({
    notes,
    search,
    auth
})