import React, {useContext} from 'react'
import { commerce } from '../commerce'
import {CartContext} from '../../context/CartContext'
import './CartItemMobile.scss'

const CartItemMobile = ({item}) => {
  const [, setCart] = useContext(CartContext)
 const handleUpdateCart = async(productId, quantity) => {
  const {cart} = await commerce.cart.update(productId, {quantity})
  setCart(cart)
 }
 console.log(item)
 return (
  <div className="cart-item">
   <div className="product">
    <img src={item.media.source} alt={item.name} className="product-image"/>
    <div className="product-info">
     <p className="product-name">{item.name}</p>
     <p className="product-price">{item.price.formatted_with_symbol}</p>
     <div className="product-action">
      <button className="dec-btn" onClick={() => handleUpdateCart(item.id, item.quantity - 1)}><span className="fas fa-minus"></span></button>
      <p className="product-quantity">{item.quantity}</p>
      <button className="inc-btn" onClick={() => handleUpdateCart(item.id, item.quantity + 1)}><span className="fas fa-plus"></span></button>
     </div>
    </div>
   </div>
   <div className="total">
    <p className="product-total">{item.line_total.formatted_with_symbol}</p>
   </div>
   
  </div>
 )
}

export default CartItemMobile
