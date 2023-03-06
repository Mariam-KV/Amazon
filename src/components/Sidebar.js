import React from "react";
import "../css/Sidebar.css";
import Checkout from "../pages/Checkout";
import CloseIcon from "@mui/icons-material/Close";
function Sidebar({ onSideBar }) {
  return (
    <div className="sidebar">
      <CloseIcon onClick={() => onSideBar(false)} />
      <Checkout />
    </div>
  );
}

export default Sidebar;
