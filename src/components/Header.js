import React from "react";
import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context";
import { auth } from "../FireBaseApp";
function Header() {
  let [{ user, basket }, dispatch] = useStateValue();
  if (user) {
    var nameOfUser = user.email;
  }

  let handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      auth.onAuthStateChanged((authUser) => {
        dispatch({
          type: "SET_USER",
          user: authUser,
          //item: state.basket,
        });
      });
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />

        <div className="header__searchIcon">
          {" "}
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav">
        <Link to={user ? "/" : "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello , {user ? nameOfUser : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {!user ? "Sign In" : "Sign out"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon />
          </Link>

          <div className="header__basketCount">{basket?.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
