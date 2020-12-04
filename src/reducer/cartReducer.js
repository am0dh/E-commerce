
export const cartReducer=(state={},action)=>{
    switch(action.type){
    case 'FETCh':
        return {items:action.payload}
    default:
        return state;
    }
}