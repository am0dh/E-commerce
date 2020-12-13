
import {cartReducer} from './cartReducer'
import {appReducer} from './appReducer'
import {loginReducer} from './loginReducer'
import {combineReducers} from 'redux'


const allReducers=combineReducers({
   
   appReducer:appReducer,
   cartReducer:cartReducer,
   loginReducer:loginReducer 
})

export default allReducers;