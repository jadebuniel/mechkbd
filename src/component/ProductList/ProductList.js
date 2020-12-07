import React, { useContext } from 'react'
import {Context} from "../../context/Context"
import PreLoader from '../PreLoader/PreLoader'
import ProductCard from '../ProductCard/ProductCard'
import "./ProductList.scss"
const ProductList = () => {
 const [products, , loading] = useContext(Context)
 console.log(products)
 return (
  <div className="product-list">
   {loading ? <PreLoader/> : products.map((product, index) => (
    <ProductCard product={product} key={index}/>
   ))}


  </div>
 )
}

export default ProductList
