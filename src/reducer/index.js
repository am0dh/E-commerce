
import {cartReducer} from './cartReducer'
import {appReducer} from './appReducer'
import {loginReducer} from './loginReducer'
import {combineReducers} from 'redux'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
   key:'root',
   storage,
   whitelist:['cartReducer','appReducer','loginReducer']

}


const allReducers=combineReducers({
   
   appReducer:appReducer,
   cartReducer:cartReducer,
   loginReducer:loginReducer 
})

export default persistReducer(persistConfig,allReducers);