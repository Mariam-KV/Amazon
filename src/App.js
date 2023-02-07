import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import "./css/App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./FireBaseApp";
import { useStateValue } from "./Context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { publishableKey } from "./stripe";
import { basketActions } from "./slices/store";
import { useDispatch } from "react-redux";
let promise = loadStripe(publishableKey);

function App() {
  let dispatch = useDispatch();

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
        <Route path="/" exact>
          <Header />
          <HomePage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
