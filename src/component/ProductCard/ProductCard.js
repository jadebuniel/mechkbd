import React from 'react'
import './ProductCard.scss'

const ProductCard = ({ product }) => {
 return (
  <div className="product-card">
   <img src={product.media.source} alt={product.name}/>
   <p className="product-price">{product.price.formatted_with_symbol}</p>
   <p className="product-name">{product.name}</p>
   <button className="product-btn">Add To Cart</button>
  </div>
 )
}

export default ProductCard
