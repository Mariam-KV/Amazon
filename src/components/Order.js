import React from "react";
import "../css/Order.css";
import BasketItem from "./BasketItem";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__id">{order.id}</div>
      <div className="order__total">
        {order.data.basket.map((item, i) => {
          return <BasketItem item={item} order={1} key={item.id + i} />;
        })}
      </div>
    </div>
  );
}

export default Order;
