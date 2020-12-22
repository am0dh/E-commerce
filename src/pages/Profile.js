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

  console.log(props.orders);

  return (
    <div>
      {props.loggedIn ? (
        <div style={{ margin: "10px" }}>
          <h4 style={basicMargin}>Welcome {props.email}</h4>
          <div className="btn btn-secondary" onClick={logout}>
            Logout
          </div>
          <hr />
          <h5 style={basicMargin}>Your Orders</h5>
          <div class="container" style={{ float: "left" }}>
            <div id="accordion" class="panel-group">
              {props.orders.map((item) => (
                <Order data={item} key={item.id} email={props.email} />
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
