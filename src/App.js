import Header from "./components/Header";
import HomePage from "./components/HomePage";
// import Account from "./components/Account";

import Checkout from "./components/Checkout";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
