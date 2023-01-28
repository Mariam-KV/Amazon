import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";
function App() {
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
