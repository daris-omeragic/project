import React from 'react'
import Navigation from '../../Templates/Navigation/Navigation'
import Footer from '../../Templates/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import { alignItemsInFirstDiv, alignItemsInSecondDiv, paddingInDiv, topDivHeight, responsivePadding } from '../../Templates/Navigation/TopRow';

export const ContactScreen = () => {
  const style = {
    style: {
      alignItemsInFirstDiv: alignItemsInFirstDiv,
      alignItemsInSecondDiv: alignItemsInSecondDiv,
      paddingInDiv: paddingInDiv, topDivHeight: topDivHeight,
      responsivePadding: responsivePadding
  }
  }
  return (
    <>
    <Navigation style = {style}/>
    <Contact/>
    <Footer/>
    </>
  )
}
