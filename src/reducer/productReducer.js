import {FETCH_PROD_TYPES,FETCH_SPECIFIC_TYPE} from '../types'



export const productReducer=(state={},action)=>{
    switch(action.type){
    case FETCH_PROD_TYPES:
        console.log("[FETCH_PROD_TYPES]",action.payload)
        return {name:action.payload}
    case FETCH_SPECIFIC_TYPE:
        console.log('[FETCH_SPECIFIC_TYPE]',action.payload)
        return {...state,products:action.payload}
    default:
        return state;
    }
}