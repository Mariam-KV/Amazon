import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import "./css/App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./FireBaseApp";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { publishableKey } from "./stripe";
import { basketActions } from "./store/basketSlice";
import { useDispatch } from "react-redux";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

let promise = loadStripe(publishableKey);
function App() {
  let dispatch = useDispatch();
  let [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser?.email) {
        // logged in
        dispatch(
          basketActions.setUser({ email: authUser.email, uid: authUser.uid })
        );
      } else {
        // logged out
        dispatch(basketActions.setUser(null));
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="*">
          <Header show={true} onSideBar={setSidebar} sidebar={sidebar} />
          {sidebar !== false && (
            <Sidebar onSideBar={setSidebar} sidebar={sidebar} />
          )}
          <Route path="/productDetails">
            <ProductDetails />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
