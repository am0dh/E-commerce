import {productReducer} from './productReducer'
import {cartReducer} from './cartReducer'
import {combineReducers} from 'redux'

const allReducers=combineReducers({
   productReducer:productReducer
   ,cartReducer:cartReducer
})

export default allReducers;