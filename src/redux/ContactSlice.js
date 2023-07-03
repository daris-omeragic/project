import { createSlice } from "@reduxjs/toolkit";


const contactSlice = createSlice({
    name: 'contact',
    initialState: {
      submittedFormData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    },
    reducers: {
      updateContactForm: (state, action) => {
        state.submittedFormData = { ...state.submittedFormData, ...action.payload };
      },
      clearContactForm: (state) => {
        state.submittedFormData = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };
      },
    },
  });
  
  export const { updateContactForm, clearContactForm } = contactSlice.actions;
  
  export default contactSlice.reducer;