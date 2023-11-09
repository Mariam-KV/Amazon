import React from "react";
import "../css/Sidebar.css";
import Checkout from "../pages/Checkout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Subtotal from "./Subtotal";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../redux/slices/sidebarSlice";
function Sidebar() {
  const dispatch = useDispatch();
  const { totalAmount } = useSelector((state) => state.basket);
  return (
    <div className="sidebar">
      <div>
        <p className="sidebar__close">
          <ArrowForwardIosIcon
            onClick={() => dispatch(sidebarActions.toggleShow(false))}
          />
        </p>
        <Checkout />
      </div>
      {totalAmount ? <Subtotal /> : ""}
    </div>
  );
}

export default Sidebar;
