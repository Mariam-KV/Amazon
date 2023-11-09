import React from "react";
import "../css/Sidebar.css";
import Checkout from "../pages/Checkout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Subtotal from "./Subtotal";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../redux/slices/sidebarSlice";
function Sidebar() {
  const dispatch = useDispatch();

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
      <main>
        <div className="sidebar__subtotal">
          <Subtotal />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
