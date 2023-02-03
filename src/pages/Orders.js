import { useState, useEffect } from "react";
import "../css/Orders.css";
import { db } from "../FireBaseApp";
import { useStateValue } from "../Context";
import Order from "../components/Order";
function Orders() {
  let [{ user, basket }, dispatch] = useStateValue();
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log(22);
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          //realtime response
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="">
        {orders.map((order, i) => {
          return <Order order={order} key={"order" + i} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
