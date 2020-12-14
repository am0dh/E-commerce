import React from "react";
import { useDispatch } from "react-redux";
import { deleteProdCart,handleCartQuantity } from "../actions/cartAction";

function CartProduct(props) {
  const quantityButtons = { fontSize: "25px", fontWeight: "bold" };
  const dispatch = useDispatch();
  const handleRemoveProdCart = (index) => {
    dispatch(deleteProdCart(index));
  };

  const handleQuantity=(str,index)=>{
    dispatch(handleCartQuantity(str,index))
  }

  return (
    <div
      className="card "
      style={{ margin: "4px 8px", display: "inline-block", width: "320px" }}
    >
      <div className="card-body">
        <h4 className="card-title">{props.data.title}</h4>
        <h6 style={{textTransform:'capitalize'}} >Brand: {props.data.brand}</h6>
        <p className="card-text">
          <span onClick={()=>handleQuantity('decrease',props.index)} style={quantityButtons}>-</span> {props.quantity}{" "}
          <span onClick={()=>handleQuantity('increase',props.index)} style={quantityButtons}>+</span> <br />
          Price: {props.price}{" "}<br/>
          
        </p>
      </div>
      <div className="card-body">
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleRemoveProdCart(props.index)}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
