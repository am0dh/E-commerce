import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import CartProduct from "../Components/CartProduct";
import { emptyCart } from "../actions/cartAction";
import { placeOrder } from "../actions/orderAction";
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

  const handlePlaceOrder = () => {
    if (props.loggedIn) {
      dispatch(placeOrder(cartArr, props.email));
    } else alert("Login first");
  };
  return (
    <div>
      <h1 style={{ margin: "10px" }}>Cart </h1>

      {cartArr.length !== 0 ? (
        <>
          {" "}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Brand</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>

                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartArr.map((item, index) => (
                <CartProduct
                  data={item.product}
                  quantity={item.quantity}
                  price={item.price}
                  key={index}
                  index={index}
                />
              ))}
              <tr className="table-secondary">
                <td colSpan="3">Total Price</td>

                <td>
                  {cartArr.length !== 0 ? (
                    <div>
                      <h6>{priceSum}</h6>{" "}
                    </div>
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={handleEmptyCart}
                  >
                    Empty Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            className="btn btn-secondary btn-sm"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </>
      ) : (
        "Your Cart is empty. Add some products."
      )}

      <br />
    </div>
  );
}

const mapPropsToState = (state, ownProps) => {
  return {
    cartReducer: state.cartReducer,
    email: state.loginReducer.email,
    loggedIn: state.loginReducer.loggedIn,
  };
};

export default connect(mapPropsToState)(Cart);
