import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LoadingSpinner from "./components/LoadingSpinner";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/index";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={<LoadingSpinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
