import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import thunk from "redux-thunk";
import "./index.css";
import { Provider } from "react-redux";
import { rootReducer } from "./assets/redux/reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
