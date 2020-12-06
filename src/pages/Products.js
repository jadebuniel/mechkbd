import React, {useEffect} from 'react'
import BreadCrumbs from '../component/BreadCrumbs/BreadCrumbs'
import Footer from '../component/Footer/Footer'
import Nav from "../component/Nav/Nav"
import PageHeader from '../component/PageHeader/PageHeader'
import ProductContents from '../component/ProductContents/ProductContents'

const info = {
 name: "product list",
 details: "View our in-stock and pre-order products."
}

const prev = [
 {
  name: "Home",
  url: "/"
 }
]

const Products = () => {
 document.title = `Product List - MechKBD`
 useEffect(() => {
  window.scrollTo(0,0)
 }, [])
 return (
  <div>
   <Nav/>
   <BreadCrumbs page={info.name} previous={prev}/>
   <PageHeader name={info.name} desc={info.details}/>
   <ProductContents/>
   <Footer/>
  </div>
 )
}

export default Products
