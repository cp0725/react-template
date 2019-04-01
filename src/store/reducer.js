import { combineReducers } from 'redux'
import navReducer from './nav/reducer'
const reducer = combineReducers({
  nav: navReducer
})

export default reducer