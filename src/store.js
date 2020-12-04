import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import allReducers from "./reducer/index";

const initialState = {};
const composeEnhancer=window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, 
    initialState,
    composeEnhancer(applyMiddleware(thunk)));

export default store;