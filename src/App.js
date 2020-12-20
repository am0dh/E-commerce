//components import
import Navigation from "./Components/Navigation";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import SingleProductPage from "./pages/SingleProductPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { useEffect } from "react";

function App(props) {
  return (
    <div className="">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/products" exact component={ProductPage} />
            <Route path="/cart" exact component={Cart} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/product" component={SingleProductPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { loggedIn: state.loginReducer.loggedIn };
};

export default connect(mapStateToProps)(App);

//mockapi
//json-server
//https://www.npmjs.com/package/redux-persist
//https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
