import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import CartProduct from "../components/CartProduct";
import Product from "../components/Product";
import { emptyCart } from "../actions/cartAction";

function Cart(props) {
  const dispatch = useDispatch();
  const cartArr = props.cartReducer.cartProducts;
  let priceSum = cartArr.reduce(
    (total, item) => parseInt(total) + parseInt(item.price),
    [0]
  );

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  return (
    <div>
      <h1>Cart </h1>
      {cartArr.length != 0 ? (
        <div>
          <h6>Total Price: {priceSum}</h6>{" "}
          <button
            className="btn btn-secondary btn-outline"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </button>
        </div>
      ) : (
        ""
      )}

      {cartArr.length != 0
        ? cartArr.map((item, index) => (
            <CartProduct
              data={item.product}
              quantity={item.quantity}
              price={item.price}
              key={index}
              index={index}
            />
          ))
        : "Your Cart is empty. Add some products."}

      <br />
    </div>
  );
}

const mapPropsToState = (state, ownProps) => {
  return {
    cartReducer: state.cartReducer,
  };
};

export default connect(mapPropsToState)(Cart);
