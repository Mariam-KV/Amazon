import { db } from "../../FireBaseApp";
import { orderActions } from "../slices/orderSlice";
export const getOrdersThunk = (user, setLoading) => (dispatch) => {
  db.collection("users")
    .doc(user?.uid)
    .collection("orders")
    .orderBy("created", "desc")
    .onSnapshot((snapshot) => {
      //realtime response
      dispatch(
        orderActions.addOrder(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
      setTimeout(() => setLoading((prev) => false), 1300);
    });
};
