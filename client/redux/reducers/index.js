import { combineReducers } from 'redux'

import stonks from './stonks'
import activeStonks from './activeStonks'

export default combineReducers({
  stonks,
  activeStonks
})
