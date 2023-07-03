import React, { createContext, useContext, useReducer } from 'react';
import checkoutReducer from "../redux/CheckoutSlice.js"

const CheckoutContext = createContext();

export const useCheckout = () => useContext(CheckoutContext);

const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, {});

  return (
    <CheckoutContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutProvider;
