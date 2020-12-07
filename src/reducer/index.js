
import {cartReducer} from './cartReducer'
import {appReducer} from './appReducer'

import {combineReducers} from 'redux'


const allReducers=combineReducers({
   
   appReducer:appReducer
})

export default allReducers;