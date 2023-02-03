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
let promise = loadStripe(publishableKey);
function App() {
  let [state, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
          //item: state.basket,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
          //  item: state.basket,
        });
      }
    });
  }, []);
  return (
    <div>
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
