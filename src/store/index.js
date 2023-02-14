import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./basketSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  basket: basketReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return { store, persistor };
// };
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
