import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./singleproduct/Product";

function ProductPage() {
  const state = useSelector((state) => state);
  const productType = useSelector((state) => state.appReducer.productType);
  const productsArr = useSelector((state) => state.appReducer.products);
  const searchKeyword = useSelector((state) => state.appReducer.searchBar);
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="dropdown"
        style={{ display: "inline-block", margin: "10px" }}
      >
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
          {productType.length !== 0
            ? productType.map((item) => (
                <div className="dropdown-item"> {item}</div>
              ))
            : ""}
        </div>
      </div>

      <form
        style={{ display: "inline-block", margin: "10px" }}
        className="form-inline md-form mr-auto mb-4"
      >
        <input
         
          className="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="price"
          id="low2high"
          value="low2high"
        />
        <label className="form-check-label" htmlFor="low2high">
          Price: Low to High
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="price"
          id="high2low"
          value="high2low"
        />
        <label className="form-check-label" htmlFor="high2low">
          Price: High to Low
        </label>
      </div>

      <br />
      {productsArr
        ? productsArr.map((item) => {
            if (searchKeyword === undefined || searchKeyword === "") {
              return <Product key={item.id} data={item}></Product>;
            } else if (
              item.title.toLowerCase().includes(searchKeyword.toLowerCase())
            ) {
              return <Product key={item.id} data={item}></Product>;
            }
          })
        : "ghar jao wapas"}
    </div>
  );
}

export default ProductPage;
// connect((state) => ({ productsTypes: state.productState}), {
//   fetchProductTypes,
// })(ProductPage);
