import "./App.css";
import Navigation from "./majorcomponents/Navigation";
import ProductPage from "./majorcomponents/ProductPage";
import Profile from "./majorcomponents/Profile";
import Cart from "./majorcomponents/Cart";
import Orders from "./majorcomponents/Orders";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
      <div className="content">
        <Switch>
          
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