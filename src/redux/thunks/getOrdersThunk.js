
import { db } from "../../FireBaseApp";
export const getOrdersThunk = (user,setOrders,setDoc) =>  (dispatch) => {
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
      setDoc(true);
    });
};
