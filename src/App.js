//components import
import Navigation from "./components/Navigation";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import {PrivateRoute} from './PrivateRoute/PrivateRoute'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";



function App() {


  return (
    <div className="">
      <Router>
        <Navigation />
        <div className="content">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/products" exact component={ProductPage} />
           <Route path="/cart" exact component={Cart} />
           <PrivateRoute exact path="/profile" component={Profile} />
           <Route path='/login' exact component={LoginPage} />
          
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

//mockapi
//json-server
//https://www.npmjs.com/package/redux-persist
//https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example