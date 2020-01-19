import { combineReducers } from 'redux'
import cartReducer from './cart'
import filterReducer from './filter'
import contactFormReducer from './contact-us'

export default combineReducers({
  cartReducer,
  filterReducer,
  contactFormReducer
})