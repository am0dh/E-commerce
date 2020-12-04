import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div className="product">
      <div className="product-img"></div>
      <div className="product-data">
  <span className="list">Title: {props.data.title}</span>
  <span className="list">Item Type: {props.data.type}</span>
        <span className="list">Brand: {props.data.brand}</span>
        <span className="list">Price: {props.data.price}</span>
        <span className="list">Description: {props.data.description}</span>
        <span className="list"></span>
        <br/>
        </div> 
    </div>
  );
}

export default Product;
