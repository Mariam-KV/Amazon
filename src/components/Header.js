import React, { useState, useEffect } from "react";
import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { basketActions } from "../store/basketSlice";
import { filterActions } from "../store/filterSlice";

import { useSelector, useDispatch } from "react-redux";

import Select from "react-select";
import { Link } from "react-router-dom";
import { auth } from "../FireBaseApp";

let start = 0;
function Header({ show = false }) {
  let allCategory = useSelector((state) => state.filter.allCategory);
  let category = useSelector((state) => state.filter.category);
  let [changeBasket, setChangeBasket] = useState(false);
  let user = useSelector((state) => state.basket.user);
  let totalAmount = useSelector((state) => state.basket.totalAmount);
  let dispatch = useDispatch();
  let handleAuthentication = () => {
    if (user?.email) {
      auth.signOut();
      dispatch(basketActions.emptyBasket());
    } else {
      auth.onAuthStateChanged((authUser) => {
        dispatch(
          basketActions.setUser({ email: authUser?.email, uid: authUser?.uid })
        );
      });
    }
  };
  useEffect(() => {
    start++;
    if (start > 1) {
      if (totalAmount !== 0) {
        setChangeBasket(true);
      }
      let timer = setTimeout(() => {
        setChangeBasket(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [totalAmount]);
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/" onClick={() => dispatch(filterActions.changeCategory())}>
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
      </div>

      {show && (
        <Select
          onChange={(e) => dispatch(filterActions.changeCategory(e.value))}
          options={allCategory}
          className="header__select"
          value={category}
        />
      )}
      <div className="header__nav">
        <Link to={user?.email ? "/" : "/login"} className="link">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              {user?.email ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {!user?.email ? "Sign In" : "Sign out"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="link">
          <div className="header__option">
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header__optionBasket">
          <Link to="/checkout" className="link">
            <ShoppingBasketIcon
              className={changeBasket ? "header__optionBasket-basket" : ""}
            />
          </Link>

          <div className="header__basketCount">{totalAmount}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
