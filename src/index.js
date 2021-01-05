import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./localstorage/localstorage";

import throttle from "lodash/throttle";

const persistedState = loadStateFromLocalStorage();

const store = createStore(rootReducer, persistedState, composeWithDevTools());
console.log(store.getState());

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage({
      filterReducer: store.getState().filterReducer,
    });
  }, 1000)
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
