import React, { useEffect, useRef } from "react";
import Product from "../Components/Product";
import {
  setFilteringState,
  setSearchState,
  resetFiltering,
  setSelectedPage,
} from "../actions/appAction";
import { fetchProductsData } from "../actions/appAction";
import { connect, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import "./ProductPage.css";

function ProductPage(props) {
  //extracting data from props
  const state = props.state;
  const productType = props.appReducer.productType;
  const products = props.products;
  const searchKeyword = props.appReducer.searchBar;
  const brands = props.appReducer.brands;
  const brandFiltering = props.brandFiltering;
  const typeFiltering = props.typeFiltering;
  const priceHigh = props.priceHigh;
  const priceLow = props.priceLow;
  const pageNumber = props.pageNumber;
  const totalProducts = props.totalProducts;

  const dispatch = useDispatch();

  //refs for filtering form
  const productTypeRef = useRef(null);
  const brandTypeRef = useRef(null);
  const priceRangeStart = useRef(null);
  const priceRangeEnd = useRef(null);

  // submits filtering data
  const handleFilterSubmit = (e) => {
    e.preventDefault();

    let data = {
      typeFiltering: productTypeRef.current.value.toLowerCase(),
      brandFiltering: brandTypeRef.current.value.toLowerCase(),
      priceHigh: priceRangeEnd.current.value,
      priceLow: priceRangeStart.current.value,
    };
    if (data.brandFiltering === "--brand type--") {
      data.brandFiltering = "";
    }
    if (data.typeFiltering === "--product type--") {
      data.typeFiltering = "";
    }
    if (data.priceHigh <= data.priceLow) {
      alert(
        "Price Range: Starting price cannot be greater than or equal to Ending price "
      );
    } else {
      dispatch(setFilteringState(data));
    }
  };

  //handle Search
  const handleSearch = (e) => {
    dispatch(setSearchState(e.target.value));
  };

  //handleResetFiltering
  const handleResetFiltering = () => {
    dispatch(resetFiltering());
  };

  //pagination functions
  const pageCount = Math.ceil(totalProducts / 8);

  const handlePageClick = ({ selected: selectedPage }) => {
    dispatch(setSelectedPage(selectedPage + 1));
  };

  //calls filtered product api when the filtering parameters are changed
  useEffect(
    () =>
      dispatch(
        fetchProductsData(
          typeFiltering,
          brandFiltering,
          priceHigh,
          priceLow,
          pageNumber
        )
      ),
    [
      props.brandFiltering,
      props.typeFiltering,
      props.priceHigh,
      props.priceLow,
      props.pageNumber,
    ]
  );

  return (
    <div>
      <form onSubmit={handleFilterSubmit}>
        <div style={{ display: "inline-block", margin: "10px", width: 300 }}>
          <div className="form-group">
            <select className="form-control" ref={productTypeRef}>
              <option selected>--Product Type--</option>
              {productType.length !== 0
                ? productType.map((item) => {
                    if (item === typeFiltering) {
                      return (
                        <option selected>
                          {" "}
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                      );
                    } else {
                      return (
                        <option>
                          {" "}
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                      );
                    }
                  })
                : ""}
            </select>
          </div>
        </div>

        <div style={{ display: "inline-block", margin: "10px", width: 300 }}>
          <div className="form-group">
            <select className="form-control" ref={brandTypeRef}>
              <option selected>--Brand Type--</option>
              {brands.length !== 0
                ? brands.map((item) => {
                    if (item === brandFiltering) {
                      return (
                        <option selected>
                          {" "}
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                      );
                    } else {
                      return (
                        <option>
                          {" "}
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </option>
                      );
                    }
                  })
                : ""}
            </select>
          </div>
        </div>

        <div
          className="input-group"
          style={{ width: "300px", display: "inline-flex", margin: "10px" }}
        >
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Price Range
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="Start"
            ref={priceRangeStart}
            defaultValue={priceLow}
          />
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              to
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder="End"
            ref={priceRangeEnd}
            defaultValue={priceHigh}
          />
        </div>

        <button
          style={{ margin: "10px", display: "inline-block" }}
          type="submit"
          className="btn btn-outline-secondary btn-sm"
        >
          Set Filtering
        </button>
        <button
          type="reset"
          style={{ margin: "10px", display: "inline-flex" }}
          onClick={handleResetFiltering}
          className="btn btn-outline-secondary btn-sm"
        >
          Reset Filtering
        </button>
      </form>

      <hr />

      <div
        style={{ width: "300px", display: "inline-block", margin: "10px" }}
        className="form-group"
      >
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Search
            </span>
          </div>
          <input
            onChange={(e) => handleSearch(e)}
            type="text"
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
      </div>
      <hr />
      <br />

      {products.length !== 0
        ? products.map((item) => {
            if (
              (searchKeyword !== undefined || searchKeyword.length == 0) &&
              item.title.toLowerCase().includes(searchKeyword.toLowerCase())
            ) {
              return <Product key={item.id} data={item} />;
            }
          })
        : "loading"}

      <hr />

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        initialPage={pageNumber - 1}
      />
      <hr />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    state: state,
    appReducer: state.appReducer,
    brandFiltering: state.appReducer.brandFiltering,
    typeFiltering: state.appReducer.typeFiltering,
    priceHigh: state.appReducer.priceHigh,
    priceLow: state.appReducer.priceLow,
    products: state.appReducer.products,
    pageNumber: state.appReducer.pageNumber,
    totalProducts: state.appReducer.totalProducts,
  };
}

export default connect(mapStateToProps)(ProductPage);
