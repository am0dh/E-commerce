import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./singleproduct/Product";

import {
  fetchProductTypes,
  fetchProductsByType,
  searchByTitle,
} from "../actions/productTypesAction";

function ProductPage() {
  const productState = useSelector((state) => state.productReducer);
  const productsArr=useSelector((state)=> state.productReducer.products)
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    
    dispatch(searchByTitle(event.target.value));
    console.log(productState.search)
  };

  const handlePriceFilter=(event)=>{

  }
  const handleProductClicked = (item) => {
    dispatch(fetchProductsByType(item));
  };

  useEffect(() => {
    console.log("useEffect productpage");
    dispatch(fetchProductTypes());
    dispatch(fetchProductsByType('allProducts'));
    return () => {};
  }, []);
  
  

  return (
    <div>
      <div className="dropdown" style={{ display: "inline-block", margin: "10px" }}>
        <button
          className="btn btn-secondary dropdown-toggle btn-sm"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Product Type
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {productState.name
            ? productState.name.map((item) => (
                <div
                  className="dropdown-item"
                  onClick={() => handleProductClicked(item)}
                >
                  {" "}
                  {item}
                </div>
              ))
            : ""}
        </div>
      </div>

      <form
        style={{ display: "inline-block", margin: "10px" }}
        className="form-inline md-form mr-auto mb-4"
      >
        
        <input
          onChange={(e) => handleSearchChange(e)}
          className="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        
      </form>
      <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceRange" value="low2high" />
  <label className="form-check-label" htmlFor="inlineRadio1">Price: Low to High</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceRange" value="high2low" />
  <label className="form-check-label" htmlFor="inlineRadio2">Price: High to Low</label>
</div>

      <br />
      {productsArr
        ? productsArr.map((item) => {
          if(productState.search===undefined || productState.search===''){return<Product key={item.id} data={item}></Product>}
          else if(item.title.toLowerCase().includes(productState.search.toLowerCase())){return<Product key={item.id} data={item}></Product>}
        }
          )
        : "ghar jao wapas"}
    </div>
  );
}

export default ProductPage;
// connect((state) => ({ productsTypes: state.productState}), {
//   fetchProductTypes,
// })(ProductPage);
