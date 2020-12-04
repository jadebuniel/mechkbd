import React from 'react'
import BreadCrumbs from '../component/BreadCrumbs/BreadCrumbs'
import Nav from "../component/Nav/Nav"
import PageHeader from '../component/PageHeader/PageHeader'
import Content from '../component/ProductContents/Content'

const info = {
 name: "product list",
 details: "View our in-stock and pre-order products."
}

const Products = () => {
 return (
  <div>
   <Nav/>
   <BreadCrumbs page={info.name}/>
   <PageHeader name={info.name} desc={info.details}/>
   <Content/>
  </div>
 )
}

export default Products
