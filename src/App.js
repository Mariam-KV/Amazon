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
import OutsideAlerter from "./components/Outside";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";
import Overlay from "./components/Overlay";
let promise = loadStripe(publishableKey);
function App() {
  let dispatch = useDispatch();
  let sidebar = useSelector((item) => item.sidebar.show);
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
          <OutsideAlerter>{sidebar !== false && <Sidebar />}</OutsideAlerter>
          <Overlay show={sidebar}>
            <Route path="/productDetails">
              <Header />
              <ProductDetails />
            </Route>
            <Route path="/" exact>
              <Header show={true} />
              <HomePage />
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
          </Overlay>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
