import React from 'react'
import CartList from '../CartList/CartList'
import CartSummary from '../CartSummary/CartSummary'
import "./CartContent.scss"

const CartContent = () => {
 return (
  <div className="cart-content">
   <CartList/>
   <CartSummary/>
  </div>
 )
}

export default CartContent
