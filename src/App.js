//components import
import Navigation from "./components/Navigation";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";

//project dependences import
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
//action import

import { fetchProductsData } from "./actions/appAction";

function App() {
  const {typeFiltering, brandFiltering, priceHigh, priceLow}=useSelector((state)=>{return {
    typeFiltering:state.appReducer.typeFiltering,
    brandFiltering:state.appReducer.brandFiltering,
    priceLow:state.appReducer.priceLow,
    priceHigh:state.appReducer.priceHigh
  }})
  const dispatch = useDispatch();

  useEffect(
    () =>
      dispatch(
        fetchProductsData(typeFiltering, brandFiltering, priceHigh, priceLow)
      ),
    []
  );

  return (
    <div className="">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/products" exact component={ProductPage} />
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
