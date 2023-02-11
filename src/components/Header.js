import React, { useState, useEffect } from "react";
import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { basketActions } from "../store";
import { useSelector, useDispatch } from "react-redux";

import Select from "react-select";
import { Link } from "react-router-dom";
import { auth } from "../FireBaseApp";
function Header({ onCategory = false, show = false, allOptions }) {
  console.log(allOptions);

  let options = [{ value: "all", label: "all" }];
  allOptions.map((option) => {
    return (options = [...options, { value: option, label: option }]);
  });
  let [changeBasket, setChangeBasket] = useState(false);
  let user = useSelector((state) => state.basket.user);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "all",
  });
  let basket = useSelector((state) => state.basket.basket);
  let totalAmount = basket.reduce((acc, item) => item.amount + acc, 0);
  let dispatch = useDispatch();

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
  useEffect(() => {
    if (totalAmount !== 0) {
      setChangeBasket(true);
    }
    let timer = setTimeout(() => {
      setChangeBasket(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [totalAmount]);

  useEffect(() => {
    if (onCategory) {
      onCategory(selectedOption);
    }
  }, [selectedOption]);
  return (
    <div className="header">
      <div className="header__logo">
        <Link
          to="/"
          onClick={() =>
            setSelectedOption({
              value: "all",
              label: "all",
            })
          }
        >
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
      </div>

      {show && (
        <Select
          onChange={setSelectedOption}
          options={options}
          className="header__select"
          value={selectedOption}
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
