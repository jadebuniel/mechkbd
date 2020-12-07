import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../CartItem/CartItem'
import {CartContext} from '../../context/CartContext'
import './CartList.scss'
import { Link } from 'react-router-dom'
import CartItemMobile from '../CartItemMobile/CartItemMobile'


const EmptyCart = () => {
 return(
  <div className="cart-container">
      <div className="empty">
    <p className="empty-message">There are no items in this cart.</p>
    <Link to="/products"><button className="empty-btn">continue shopping</button></Link>
  </div>
  </div>
 )
}
const FilledCart = () => {
   const [cart] = useContext(CartContext)
 return(
  <div className="cart-container">
    <table  className="cart-list-wide">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      { cart.line_items ? cart.line_items.map((item, index) => (
     <CartItem key={index} item={item}/>
   )) : null}
      </tbody>
    </table>
    <div className="cart-list-mobile">
      { cart.line_items ? cart.line_items.map((item, index) => (
     <CartItemMobile key={index} item={item}/>
   )) : null}
    </div>
  </div>
 )
}

const CartList = () => {
   const [cart] = useContext(CartContext)
   const [loaded, setLoaded] = useState(false)

 return (
  <>
  {Object.keys(cart).length === 0 ? <EmptyCart/> : cart.line_items.length ? <FilledCart/> : <EmptyCart/>}
  </>


 )
}

export default CartList
