import React from "react";
import { useDispatch } from "react-redux";
import { deleteProdCart, handleCartQuantity } from "../actions/cartAction";

function CartProduct(props) {
  const dispatch = useDispatch();
  const handleRemoveProdCart = (index) => {
    dispatch(deleteProdCart(index));
  };

  const handleQuantity = (str, index) => {
    dispatch(handleCartQuantity(str, index));
  };

  return (
    <tr style={{ textTransform: "capitalize" }}>
      <td>{props.data.title}</td>
      <td>{props.data.brand}</td>

      <td>
        <span onClick={() => handleQuantity("decrease", props.index)}>- </span>
        {props.quantity}
        <span onClick={() => handleQuantity("increase", props.index)}> +</span>
      </td>
      <td>{props.price}</td>
      <td>
        {" "}
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleRemoveProdCart(props.index)}
        >
          Remove from Cart
        </button>
      </td>
    </tr>
  );
}

export default CartProduct;
