import React from 'react'
import Navigation from '../../Templates/Navigation/Navigation'
import Footer from '../../Templates/Footer/Footer'
import  CartPage  from '../../Pages/CartPage/CartPage'
import Information from '../../components/Information/Information'

export const CartScreen = () => {
  return (
    <>
    <Navigation/>
    <CartPage/>
    <Information/>
    <Footer/>
    </>
  )
}
