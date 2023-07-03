import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux/counterSlice";
import cartReducer from "./redux/CartSlice";
import productsReducer from "./redux/productsSlice"
import contactReducer from "./redux/ContactSlice";
import checkoutReducer from "./redux/CheckoutSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products : productsReducer,
    contact: contactReducer,
    checkout : checkoutReducer ,
  },
});