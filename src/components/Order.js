import React from "react";
import { useDispatch } from "react-redux";
import "./Order.css";
import { reorder } from "../actions/orderAction";

const Order = (props) => {
  const dispatch = useDispatch();

  const handleReorder = () => {
    dispatch(reorder(props.data, props.email));
    console.log(props.data);
  };

  return (
    <div className="panel">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a
            href={`#panelBody${props.data.id}`}
            className="accordion-toggle"
            data-toggle="collapse"
            data-parent="#accordion"
          >
            Order {props.data.id} &nbsp; Total Price:&#8377;
            {props.data.totalPrice} &nbsp;{" "}
            <button
              onClick={handleReorder}
              className="btn btn-sm btn-secondary"
            >
              {" "}
              Re-order
            </button>
          </a>
        </h4>
      </div>
      <div
        id={`panelBody${props.data.id}`}
        className="panel-collapse collapse in"
      >
        <div className="panel-body">
          <p>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Actual Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Quantity*Actual Price</th>
                </tr>
              </thead>
              <tbody>
                {props.data.cartArr.map((item) => (
                  <tr>
                    <td>{item.product.title}</td>
                    <td>{item.product.brand}</td>
                    <td>&#8377;{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>&#8377;{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
