import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import {
  loadStateFromLocalStorage,
  saveStateToLocalStorage,
} from "./localstorage/localstorage";

import throttle from "lodash/throttle";

const persistedState = loadStateFromLocalStorage();
const store = createStore(reducer, persistedState);

store.subscribe(
  throttle(() => {
    saveStateToLocalStorage(store.getState());
    //??? {grayscaleLevel: store.getState().grayscaleLevel} 
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
