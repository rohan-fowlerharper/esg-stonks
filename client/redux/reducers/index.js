import { combineReducers } from 'redux'

import stonks from './stonks'
import activeStonks from './activeStonks'
import favouriteStonks from './favouriteStonks'

export default combineReducers({
  favouriteStonks,
  stonks,
  activeStonks
})
