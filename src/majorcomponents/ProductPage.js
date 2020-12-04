import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./singleproduct/Product";
import { connect } from "react-redux";
import { fetchProductTypes,fetchProductsByType } from "../actions/productTypesAction";

function ProductPage() {

    // <li class="nav-item dropdown">
    //     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //       Dropdown link
    //     </a>
    //     <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
    //     {productTypes.name
    //           ? productTypes.name.map((item) => (
    //               <NavLink
    //               className="dropdown-item"
    //                 to="/products"
                    
    //                 onClick={() => handleProductClicked(item)}
    //               >
    //                 {item}
    //               </NavLink>
    //             ))
    //           : ""}
    //     </div>
    //   </li>

    const productTypes=useSelector(state=> state.productReducer)
    const dispatch = useDispatch()

    console.log(productTypes,'ProductPage')
    
    useEffect(() => {
        console.log('useEffect productpage')
        dispatch(fetchProductTypes());
        return () => {
        }
    }, [])

  return <div>

   <br />
    {productTypes.products?productTypes.products.map((item)=><Product key={item.id} data={item} ></Product>):'ghar jao wapas'}  
      </div>;
}

export default ProductPage
// connect((state) => ({ productsTypes: state.productTypes}), {
//   fetchProductTypes,
// })(ProductPage);
