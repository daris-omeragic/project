import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state for contact
const initialContactState = {
  submittedFormData: null,
};

// Create the ContactContext
const ContactContext = createContext();

// Define the contact reducer function
const contactReducer = (state, action) => {
  switch (action.type) {
    case 'SUBMIT_FORM':
      return {
        ...state,
        submittedFormData: action.payload,
      };
    default:
      return state;
  }
};

// Create the ContactProvider component
export const ContactProvider = ({ children }) => {
  const [contactState, contactDispatch] = useReducer(
    contactReducer,
    initialContactState
  );

  return (
    <ContactContext.Provider value={{ contactState, contactDispatch }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook to consume the ContactContext
export const useContact = () => useContext(ContactContext);