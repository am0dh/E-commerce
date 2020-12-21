

export const ordersReducer=(state={orders:[]},action)=> {
    switch(action.type){
        case "SET_USER_ORDERS":
            return {orders:[...action.payload]}
        default:
            return {...state}
    
}

}