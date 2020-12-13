let initialState={
    cartProducts:[ ]
}

export const cartReducer=(state=initialState,action)=>{
    switch(action.type){
    case 'ADD_PRODUCT_TO_CART':
        let prodCartArr=[...state.cartProducts]
        prodCartArr.push(action.payload)
        console.log(state)
        return {...state,cartProducts:[...prodCartArr]}
    case 'FETCH_PRODUCTS_FROM_USER_CART':
        console.log(action.payload)
        return{...state,cartProducts:[...state.cartProducts,...action.payload]}
    case 'DELETE_PRODUCT_FROM_CART':
        console.log(action.payload)
    default:
        return state;
    }
}