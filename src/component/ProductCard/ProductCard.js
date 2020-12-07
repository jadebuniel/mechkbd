import React, { useContext } from 'react'
import './ProductCard.scss'
import {commerce} from '../commerce'
import {CartContext} from '../../context/CartContext'

const ProductCard = ({ product }) => {
 const [cart, setCart] = useContext(CartContext)
 const handleAddToCart = async(productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity)
  setCart(item.cart)
 }
 return (
  <div className="product-card">
   <img src={product.media.source} alt={product.name}/>
   <p className="product-price">{product.price.formatted_with_symbol}</p>
   <p className="product-name">{product.name}</p>
   <button className="product-btn" onClick={() => handleAddToCart(product.id, 1)}>Add To Cart</button>
  </div>
 )
}

export default ProductCard
