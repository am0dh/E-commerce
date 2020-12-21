import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";
import { Link } from "react-router-dom";
import {addToSingleProductPage} from '../actions/appAction'

function Product(props) {
  const style = { width: "18rem", display: "inline-block", margin: "15px" };
  const imageStyle = {
    display: "block",
    margin: "5px auto",
    height: "200px",
    width: "200px",
  };
  const dispatch = useDispatch();

  const handleCartAdder = () => {
    dispatch(addToCart(props.data));
  };

  const addToProductPage = () => {
    dispatch(addToSingleProductPage(props.data));
  };

  return (
    <div className="card" style={style}>
      <Link to={"./product"} onClick={addToProductPage}>
        <img
          className="card-img-top"
          style={imageStyle}
          src={props.data.image}
          alt={props.data.image}
        />
        <div className="card-body">
          <h5 className="card-title" style={{color:"black"}}>{props.data.title}</h5>
        </div>
        <ul  className="list-group list-group-flush">
          <li  style={{backgroundColor:"rgb(243, 242, 242)"}} className="list-group-item">Brand: {props.data.brand}</li>
          <li style={{backgroundColor:"rgb(243, 242, 242)"}} className="list-group-item">Type: {props.data.type}</li>
          <li style={{backgroundColor:"rgb(243, 242, 242)"}} className="list-group-item">
            Price: <b>&#8377;{props.data.price}</b>
          </li>
        </ul>
      </Link>
      <div style={{backgroundColor:"rgb(243, 242, 242)"}}  className="card-body">
        <div onClick={handleCartAdder} className="btn btn-outline-secondary btn-sm">
          Add To Cart
        </div>
      </div>
    </div>
  );
}

export default Product;
