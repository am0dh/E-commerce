import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import {addToCart} from '../actions/cartAction'

function Product(props) {
  const style = { width: "18rem", display: "inline-block", margin: "20px" };
  const imageStyle={
    display:"block",
    margin:"0px auto",
    height:"200px",
    width:"200px"
  }

  const dispatch=useDispatch();

  const handleCartAdder=()=>{
    
    dispatch(addToCart(props.data))
  }



  return (
    <div className="card" style={style}>
      <img className="card-img-top" style={imageStyle} src={props.data.image} alt={props.data.image} />
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Brand: {props.data.brand}</li>
        <li className="list-group-item">Type: {props.data.type}</li>
        <li className="list-group-item">
          Price: <b>&#8377;{props.data.price}</b>
        </li>
      </ul>
      <div className="card-body">
        <div onClick={handleCartAdder} className="btn btn-secondary btn-sm">Add To Cart</div>
      </div>
    </div>
  );
}

export default Product;
