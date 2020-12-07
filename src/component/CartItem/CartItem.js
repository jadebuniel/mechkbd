import React, { useContext } from 'react'
import './CartItem.scss'
import { commerce } from '../commerce'
import {CartContext} from '../../context/CartContext'


const CartItem = ({item}) => {
 const [, setCart] = useContext(CartContext)
 const handleUpdateCart = async(productId, quantity) => {
  const {cart} = await commerce.cart.update(productId, {quantity})
  setCart(cart)
 }

 return (
  <tr className="cart-item">
    <td className="product"> <img src={item.media.source} alt=""/> <p>{item.name}</p></td>
    <td className="price"><p>{item.price.formatted_with_symbol}</p></td>
    <td className="quantity-container">
     <div className="quantity">
       <button className="dec-btn" onClick={() => handleUpdateCart(item.id, item.quantity - 1)}><span className="fas fa-minus" ></span></button>
       <p className="count">{item.quantity}</p>
       <button className="inc-btn" onClick={() => handleUpdateCart(item.id, item.quantity + 1)}><span className="fas fa-plus" ></span></button>
     </div>
    </td>
    <td className="total"><p>{item.line_total.formatted_with_symbol}</p></td>
  </tr>
 )
}

export default CartItem
