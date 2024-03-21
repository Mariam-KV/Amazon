import { useState, useEffect } from "react";
import "../css/Orders.css";
import { getOrdersThunk } from "../redux/thunks/getOrdersThunk";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import { addOrder } from "../redux/slices/orderSlice";
import Order from "../components/Order";
function Orders() {
  const user = useSelector((state) => state.basket.user);
  const orders = useSelector((state) => state.order);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user) {
      dispatch(getOrdersThunk(user, setLoading));
    } else {
      dispatch(addOrder());
    }
  }, [dispatch, user]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="orders">
          <h1>
            Your Orders{" "}
            {!orders || (orders.length === 0 && !loading && "is empty")}
          </h1>
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
