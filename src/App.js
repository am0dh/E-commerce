//components import
import Navigation from "./majorcomponents/Navigation";
import ProductPage from "./majorcomponents/ProductPage";
import Profile from "./majorcomponents/Profile";
import Cart from "./majorcomponents/Cart";
import Orders from "./majorcomponents/Orders";
import LandingPage from "./majorcomponents/LandingPage";
//project dependences import
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
//action import
import { fetchProductsData } from "./actions/appAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProductsData()), []);

  return (
    <div className="">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/products" exact component={ProductPage} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

//mockapi
//json-server
