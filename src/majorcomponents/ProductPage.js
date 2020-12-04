import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./singleproduct/Product";
import { connect } from "react-redux";
import { fetchProductTypes,fetchProductsByType } from "../actions/productTypesAction";

function ProductPage() {

    const productTypes=useSelector(state=> state.productReducer)
    const dispatch = useDispatch()

    console.log(productTypes)
    
    useEffect(() => {
        console.log('useEffect productpage')
        dispatch(fetchProductTypes());
        return () => {
        }
    }, [])

    const handleProductClicked =(item)=>{

        dispatch(fetchProductsByType(item))

    }
  return <div>

{productTypes.items.map((item)=><button onClick={()=>handleProductClicked(item)}>{item}</button>)}
      
      </div>;
}

export default ProductPage
// connect((state) => ({ productsTypes: state.productTypes}), {
//   fetchProductTypes,
// })(ProductPage);
