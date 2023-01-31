import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import "./css/App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./FireBaseApp";
import { useStateValue } from "./Context";
function App() {
  let [state, dispatch] = useStateValue();
  console.log(state, dispatch);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
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
      </Switch>
    </div>
  );
}

export default App;
