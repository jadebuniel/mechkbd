import React from 'react'
import "./CartSummary.scss"
import { useHistory } from 'react-router-dom'

const CartSummary = ({cart}) => {
 const history = useHistory()
 const handleCheckOut = () => {
  window.location.assign(cart.hosted_checkout_url)
 }
 return (
  <div className="cart-summary">
   <div className="summary-container">
    <p className="subtotal">SUBTOTAL </p>
    <p className="cart-total">{cart.subtotal ? cart.subtotal.formatted_with_symbol : null}</p>
   </div>
   <button className="checkout-btn" onClick={handleCheckOut}>CHECKOUT</button>
  </div>
 )
}

export default CartSummary
