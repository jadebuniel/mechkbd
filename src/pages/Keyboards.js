import React, {useEffect} from 'react'
import BreadCrumbs from '../component/BreadCrumbs/BreadCrumbs'
import Nav from '../component/Nav/Nav'
import PageHeader from '../component/PageHeader/PageHeader'
import ProductContents from '../component/ProductContents/ProductContents'
import Footer from '../component/Footer/Footer'


const info = {
 name: "keyboards",
 details: "View our in-stock and pre-order keyboards"
}

const prev = [
 {
  name: "Home",
  url: "/"
 },
  {
  name: "Product List",
  url: "/products"
 }
]


const Keyboards = () => {
  document.title = `Keyboards - MechKBD`
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

export default Keyboards
