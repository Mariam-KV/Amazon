import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { sidebarReducer } from "./slices/sidebarSlice";
import { stripeReducer } from "./slices/stripeSlice";
import { reviewReducer } from "./slices/reviewSlice";
import { productDetailsReducer } from "./slices/productSlice";
import { orderReducer } from "./slices/orderSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["sidebar", "review"],
};
const rootReducer = combineReducers({
  basket: basketReducer,
  productDetails: productDetailsReducer,
  sidebar: sidebarReducer,
  stripe: stripeReducer,
  review: reviewReducer,
  order: orderReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
