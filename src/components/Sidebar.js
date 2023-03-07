import React from "react";
import "../css/Sidebar.css";
import Checkout from "../pages/Checkout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Subtotal from "./Subtotal";
function Sidebar({ onSideBar }) {
  return (
    <div className="sidebar">
      <p className="sidebar__close">
        <ArrowForwardIosIcon onClick={() => onSideBar(false)} />
      </p>
      <main>
        <Checkout />
        <div className="sidebar__subtotal">
          <Subtotal />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;
