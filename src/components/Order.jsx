import React from "react";
import "../css/Order.css";
import CheckoutProduct from "./CheckoutProduct";
import moment from "moment";
import CurrencyFormatC from "./CurrencyFormatC";
function Order({ order }) {
  let timestamp = order.data.created;
  console.log(order.data.basket, 345678);
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__data">
        {moment.unix(timestamp).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      <div className="oder__allItems">
        {order.data.basket.map((item, i) => {
          return <CheckoutProduct item={item} hide="true" key={item.id + i} />;
        })}
      </div>
      <div className="order__total">
        <CurrencyFormatC
          value={order.data.amount / 100}
          amount={order.data.basket.length}
          title="payment"
        />
      </div>
    </div>
  );
}

export default Order;
