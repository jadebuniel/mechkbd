import React from 'react'
import ProductList from '../ProductList/ProductList'
import Sort from '../Sort/Sort'
import './ContentContainer.scss'

const ContentContainer = () => {
 return (
  <div className="content-container">
   <Sort/>
   <ProductList/>
  </div>
 )
}

export default ContentContainer
