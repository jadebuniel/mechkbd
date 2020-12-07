import React, {useContext} from 'react'
import CartList from '../CartList/CartList'
import CartSummary from '../CartSummary/CartSummary'
import "./CartContent.scss"
import {CartContext} from '../../context/CartContext'


const CartContent = () => {
   const [cart] = useContext(CartContext)

 return (
  <div className="cart-content">
   <CartList/>
     {Object.keys(cart).length === 0 ? null : cart.line_items.length ? <CartSummary cart={cart}/> : null}
  </div>
 )
}

export default CartContent
