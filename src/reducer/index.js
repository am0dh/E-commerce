import { cartReducer } from "./cartReducer";
import { appReducer } from "./appReducer";
import { loginReducer } from "./loginReducer";
import { ordersReducer } from "./ordersReducer";
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartReducer", "appReducer", "loginReducer", "ordersReducer"],
};

const allReducers = combineReducers({
  appReducer: appReducer,
  cartReducer: cartReducer,
  loginReducer: loginReducer,
  ordersReducer: ordersReducer,
});

export default persistReducer(persistConfig, allReducers);
