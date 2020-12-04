import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./singleproduct/Product";
import { connect } from "react-redux";
import { fetchProductTypes,fetchProductsByType } from "../actions/productTypesAction";

function ProductPage() {

    const productTypes=useSelector(state=> state.productReducer)
    const dispatch = useDispatch()

    console.log(productTypes,'ProductPage')
    
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

{productTypes.name?productTypes.name.map((item)=><button onClick={()=>handleProductClicked(item)}>{item}</button>):''}
    <br />
    {productTypes.products?productTypes.products.map((item)=><Product key={item.id} data={item}></Product>):'ghar jao wapas'}  
      </div>;
}

export default ProductPage
// connect((state) => ({ productsTypes: state.productTypes}), {
//   fetchProductTypes,
// })(ProductPage);
