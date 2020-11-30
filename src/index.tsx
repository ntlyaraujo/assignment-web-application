import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {ServicesReducer} from "../src/core/redux/reducer";
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const logger = createLogger();

const rootReducers = combineReducers({ ServicesReducer });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
