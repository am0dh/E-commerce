

let initialState={
    products:[],
    productType: [],
    brands:[],
    priceSort:'no',
    brandFiltering: '',
    typeFiltering:'',
    searchBar:'',
    

}

export const appReducer=(state={...initialState},action)=>{
    switch (action.type){
        case 'FETCH_PRODUCTS_DATA':
            console.log(action.payload)
            return {...state,products:[...action.payload.products],brands:[...action.payload.brands],productType:[...action.payload.productType]}
        
        case 'FETCH_PRODUCTS_TYPES':
        default:
            return state     
    }

}