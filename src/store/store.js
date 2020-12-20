import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducers from "../reducer/index";
import { persistStore } from "redux-persist";

const initialState = {};
const composeEnhancer = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
