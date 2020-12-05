import React from 'react'
import Filter from '../Filter/Filter'
import "./ProductContents.scss"
import ContentContainer from '../ContentContainer/ContentContainer'

const ProductContents = () => {
 return (
  <div className="content">
   <Filter/>
   <ContentContainer/>
  </div>
 )
}

export default ProductContents
