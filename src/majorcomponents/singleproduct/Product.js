import React from "react";
import "./Product.css";
function Product(props) {
  const style={width: '18rem',
  display: 'inline-block',
margin:'20px'}
  return (
    <div className="card" style={style}>
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{props.data.title}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Brand: {props.data.brand}</li>
      <li className="list-group-item">Type: {props.data.type}</li>
  <li className="list-group-item">Price: <b>&#8377;{props.data.price}</b></li>
    </ul>
    <div className="card-body">
      <div className="btn btn-secondary sm">Add To Cart</div>
      
    </div>
  </div>
 
    
  );
}

export default Product;

