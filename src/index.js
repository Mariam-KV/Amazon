import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initialState, reducer } from "./reducer";
import { Context } from "./Context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context initialState={initialState} reducer={reducer}>
      <App />
    </Context>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
