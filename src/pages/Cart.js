import React from 'react'
import Footer from '../component/Footer/Footer'
import Nav from '../component/Nav/Nav'
import PageHeader from '../component/PageHeader/PageHeader'
import BreadCrumbs from '../component/BreadCrumbs/BreadCrumbs'
import CartContent from '../component/CartContent/CartContent'

const info = {
 name: "cart",
 details: "View our in-stock and pre-order products."
}

const prev = [
 {
  name: "Home",
  url: "/"
 }
]

const Cart = () => {
 return (
  <div>
   <Nav/>
   <BreadCrumbs page={info.name} previous={prev}/>
   <PageHeader name={"Your Cart "}/>
   <CartContent/>
  </div>
 )
}

export default Cart
