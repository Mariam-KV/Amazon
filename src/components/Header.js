import React from "react";
import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { basketActions } from "../slices/store";
import { useSelector, useDispatch } from "react-redux";
import { Menu, Search } from "@mui/icons-material/";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context";
import { auth } from "../FireBaseApp";
function Header() {
  let user = useSelector((state) => state.basket.user);
  let basket = useSelector((state) => state.basket.basket);
  let dispatch = useDispatch();

  if (user.email) {
    var nameOfUser = user.email;
  }

  let handleAuthentication = () => {
    if (user?.email) {
      auth.signOut();
    } else {
      auth.onAuthStateChanged((authUser) => {
        dispatch(
          basketActions.setUser({ email: authUser?.email, uid: authUser?.uid })
        );
      });
    }
  };

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__1">
          <Link to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__search header__2">
          <input type="text" className="header__searchInput" />

          <div className="header__searchIcon">
            <Search />
          </div>
        </div>
        <div className="header__nav header__3">
          <Link to={user?.email ? "/" : "/login"}>
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">
                Hello , {user?.email ? nameOfUser : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {!user?.email ? "Sign In" : "Sign out"}
              </span>
            </div>
          </Link>
          <Link to={user?.email ? "/orders" : "/"}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__optionBasket">
            <Link to="/checkout">
              <ShoppingBasketIcon />
            </Link>

            <div className="header__basketCount">{basket?.length}</div>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <Menu className="menu__icon" />
        <p className="link ">All</p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link">Electronics</p>
      </div>
    </div>
  );
}

export default Header;
