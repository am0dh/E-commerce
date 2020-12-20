import React from "react";
import "./SingleProductPage.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

function SingleProductPage(props) {
  const dispatch = useDispatch();

  const handleCartAdder = () => {
    dispatch(addToCart(props.data));
  };
  return (
    <div className="main-content">
      <img src={props.data.image} />

      <div className="main-desc">
        <span className="product-title">{props.data.title}</span>
        <span className="product-price">&#8377;{props.data.price}</span>
        <span className="product-brand">
          <b>Brand:</b> {props.data.brand}
        </span>
        <span className="product-type">
          <b>Product type:</b> {props.data.type}
        </span>

        <div className="product-description">
          <h5>Description</h5>
          {props.data.description}
        </div>
        <div
          onClick={handleCartAdder}
          className="btn btn-secondary btn-sm button"
        >
          Add To Cart
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { data: state.appReducer.singleProduct };
};

export default connect(mapStateToProps)(SingleProductPage);
