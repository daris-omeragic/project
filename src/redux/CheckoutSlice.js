import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  shopperInformation: {},
  billTo: {},
  shippingOrder: {},
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setShopperInformation: (state, action) => {
      state.shopperInformation = action.payload;
    },
    setBillTo: (state, action) => {
      state.billTo = action.payload;
    },
    setShippingOrder: (state, action) => {
      state.shippingOrder = action.payload;
    },
  },
});

export const { setShopperInformation, setBillTo, setShippingOrder } = checkoutSlice.actions;

export default checkoutSlice.reducer;
