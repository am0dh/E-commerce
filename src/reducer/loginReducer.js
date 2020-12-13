let initialState={
    isLoggedIn:false,
    userDetails:'',
    userOrders:[],
    
   
}

export const loginReducer=(state={...initialState},action)=> {
    switch(action.type){
    case 'ADD_USER_INFO':
        console.log(action.payload)
        return {state,...action.payload}
    case 'FETCH_ORDERS_FROM_USER_ORDERS':
        return{state,userOrders:[...state.userOrders,...action.payload]}
    default:
        return state
    }
    
}   