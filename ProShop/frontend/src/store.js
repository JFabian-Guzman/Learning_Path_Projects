import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apiSlice";
import CartSliceReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: CartSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat
  (apiSlice.middleware),
  devTools: true,
});

export default store;