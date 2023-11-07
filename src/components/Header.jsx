import "../css/Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { basketActions } from "../redux/slices/basketSlice";
import { productDetailsActions } from "../redux/slices/productSlice";
import { sidebarActions } from "../redux/slices/sidebarSlice";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";
import { Link } from "react-router-dom";
import { auth } from "../FireBaseApp";
function Header({ show = false }) {
  let { allCategory, category } = useSelector((state) => state.productDetails);
  let { user, totalAmount, changeBasket } = useSelector(
    (state) => state.basket
  );

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

  return (
    <div className="header">
      <div className="header__logo">
        <Link
          to="/"
          onClick={() => dispatch(productDetailsActions.changeCategory())}
        >
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
      </div>

      {show && (
        <Select
          onChange={(e) =>
            dispatch(productDetailsActions.changeCategory(e.value))
          }
          options={allCategory}
          className="header__select"
          value={category}
        />
      )}
      <div className="header__nav">
        <Link to={user?.email ? "/" : "/login"} className="link">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              {user?.email ? user.email.split("@")[0] : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {!user?.email ? "Sign In" : "Sign out"}
            </span>
          </div>
        </Link>
        <Link to={user?.email ? "/orders" : "/login"} className="link">
          <div className="header__option">
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header__optionBasket">
          <div
            className="link"
            onClick={() => dispatch(sidebarActions.toggleShow(true))}
          >
            <ShoppingBasketIcon
              className={changeBasket ? "header__optionBasket-basket" : ""}
            />
          </div>

          <div className="header__basketCount">{totalAmount}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
