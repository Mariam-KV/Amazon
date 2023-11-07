import { useState, useEffect } from "react";
import "../css/Orders.css";
import { getOrdersThunk } from "../redux/thunks/getOrdersThunk";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

import Order from "../components/Order";
function Orders() {
  let user = useSelector((state) => state.basket.user);
  let dispatch = useDispatch();
  let [orders, setOrders] = useState([]);
  let [doc, setDoc] = useState(false);
  useEffect(() => {
    if (user) {
      dispatch(getOrdersThunk(user, setOrders, setDoc));
    } else {
      setOrders([]);
    }
  }, [dispatch, user]);

  return (
    <>
      {!doc ? (
        <LoadingSpinner />
      ) : (
        <div className="orders">
          <h1>Your Orders {!orders.length && "is empty"}</h1>
          <div>
            {orders.map((order, i) => {
              return <Order order={order} key={"order" + i} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Orders;
