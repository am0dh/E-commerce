import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Order from "../Components/Order";
import LoginPage from "../LoginRegis/LoginPage";

function Profile(props) {
  const dispatch = useDispatch();
  const basicMargin = { margin: "10px" };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      {props.loggedIn ? (
        <div style={{ margin: "10px" }}>
          <h4 style={basicMargin}>Logged In as {props.email}</h4>
          <div className="btn btn-secondary" onClick={logout}>
            Logout
          </div>
          <h5 style={basicMargin}>Your Orders</h5>
          <div class="container">
            <div
              class="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {props.orders.map((item) => (
                <Order data={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.loginReducer.loggedIn,
    email: state.loginReducer.email,
    orders: state.ordersReducer.orders,
  };
};
export default connect(mapStateToProps)(Profile);
