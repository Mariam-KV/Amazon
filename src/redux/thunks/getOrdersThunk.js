import { db } from "../../FireBaseApp";
import { addOrder } from "../slices/orderSlice";
export const getOrdersThunk = (user, setLoading) => (dispatch) => {
  db.collection("users")
    .doc(user?.uid)
    .collection("orders")
    .orderBy("created", "desc")
    .onSnapshot((snapshot) => {
      //realtime response

      dispatch(
        addOrder(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
      setTimeout(() => setLoading((prev) => false), 1300);
    });
};
