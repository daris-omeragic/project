import React from "react";
import "./App.css";


import "./assets/fonts/Lato-Black.ttf";
import "./assets/fonts/Lato-BlackItalic.ttf";
import "./assets/fonts/Lato-Bold.ttf";
import "./assets/fonts/Lato-BoldItalic.ttf";
import "./assets/fonts/Lato-Italic.ttf";
import "./assets/fonts/Lato-Light.ttf";
import "./assets/fonts/Lato-LightItalic.ttf";
import "./assets/fonts/Lato-Regular.ttf";
import "./assets/fonts/Lato-Thin.ttf";
import "./assets/fonts/Lato-ThinItalic.ttf";
import "./assets/fonts/Montserrat-Black.ttf";
import "./assets/fonts/Montserrat-BlackItalic.ttf";
import "./assets/fonts/Montserrat-Bold.ttf";
import "./assets/fonts/Montserrat-BoldItalic.ttf";
import "./assets/fonts/Montserrat-ExtraBold.ttf";
import "./assets/fonts/Montserrat-ExtraLight.ttf";



import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePageScreen from "./Screens/HomePageScreen/HomePageScreen";
import ShopScreen from "./Screens/ShopScreen/ShopScreen";
import BlogScreen from "./Screens/BlogScreen/BlogScreen";
import NotFoundScreen from "./Screens/NotFoundScreen/NotFoundScreen";
import { ContactScreen } from "./Screens/ContactScreen/ContactScreen";
import { CartScreen } from "./Screens/CartScreen/CartScreen";
import CartContextProvider from "./context/CartContext";
import UserContextProvider from "./context/UserContext";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import CheckoutScreen from "./Screens/CheckoutScreen/CheckoutScreen";
import { ContactProvider } from "./context/ContactContext";
import CheckoutProvider from "./context/CheckoutContext";






const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageScreen />,
    },
    {
      path: "/shop",
      element: <ShopScreen />
    },
    {
      path: "/blog",
      element: <BlogScreen />
    },
    {
      path: "/about",
      element: <NotFoundScreen/>
    },
    {
      path: "/contact",
      element: <ContactScreen />
    },
    {
      path: "/cart",
      element: <CartScreen />
    },
    {
      path: '/login',
      element: <LoginScreen />
    },
    {
      path: '/Checkout',
      element: <CheckoutScreen />
    },
  ]);
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <CheckoutProvider>
            <ContactProvider>
              <RouterProvider router={router} />
            </ContactProvider>
          </CheckoutProvider>
        </CartContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;








































/*
import React, { useState } from "react";
import "./App.css";
import CustomForm from "./components/CustomForm/CustomForm";
import "./components/CustomForm/CustomForm.css";
import CustomDiv from "./components/CustomDiv/CustomDiv";
*/
/*
const App = () => {
  const [fullName, setFullName] = useState("");
  function dataGrabber(name, lastName) {
    let fullName = name + " " + lastName;
    console.log(fullName)
    setFullName(fullName);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <CustomDiv>
          <h4>{fullName}</h4>
        </CustomDiv>
        <CustomForm sendData={(name, lName) => dataGrabber(name, lName)} />
      </header>
    </div>
  );
};


export default App;
*/











































//import { useState, useEffect } from "react";
//import { useState } from 'react';
/*
import logo from './logo.svg';

import './App.css';
import StyledButton from './components/styledButton/StyledButton';
import StyleHeader from './components/styledButton/StyleHeader';
import Text from './components/styledButton/StyleText';
*/
//import StyledInput from "./components/styledButton/StyledInput/StyledInput";

/*
function App() {
  //const [innerText, setInnerText] = useState("");
  //const [clicked, setClicked] = useState(false);
  //const [InputValue,setInputValue] = useState("");
  const [name,setName] = useState ("");
  const [age,setAge] = useState ("");

  //useEffect(() => {
    //clicked ? setInnerText("Clicked") : setInnerText("Click me");
  //}, [clicked]);
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }


  //function buttonClick() {
    //setClicked(!clicked);
  //}
  //function onChangeFunction(event){
    //setInputValue(event.target.value)
  //}

  return (
    <div className="App">
      <header className="App-header">
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
    </form>
      </header>
    </div>
  );
}


export default App;
*/

//export default ExampleFunctionalComponent;











/*
function ExampleFunctionalComponent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  useEffect(() => {
    if (age < 0 || age > 100) {
      setAge(0);
    }
  }, [age]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleAgeChange(event) {
    setAge(event.target.value);
  }


  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
    </form>
  );
}

*/