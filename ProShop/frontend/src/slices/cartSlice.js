import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils.js";

const initialState = localStorage.getItem("cart") ? JSON.parse
(localStorage.getItem("cart")) : {cartItems: []/*Initial state*/
  , shippingAddress: {}
  , paymentMethod: 'PayPal'/*You can also integrate Stripe*/};



const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducers will hane any frunction related to the cart
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // Check if the item is already in the cart
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) => x._id === existItem._id
          ? item : x);
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x._id !== action.payload/*Id of the item we want to delete*/);
        
        return updateCart(state);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateCart(state);
    },
    savePaymentMehod: (state, action) => {
      state.paymentMethod = action.payload;
      return updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      return updateCart(state);
    },
    resetCart: (state) => (state = initialState)
  },
});

export const {
  addToCart,
  removeFromCart,
  saveShippingAddress,
  savePaymentMehod,
  clearCartItems,
  resetCart
} = cartSlice.actions;
export default cartSlice.reducer;