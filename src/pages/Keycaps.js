import React, {useEffect} from 'react'
import BreadCrumbs from '../component/BreadCrumbs/BreadCrumbs'
import Footer from '../component/Footer/Footer'
import Nav from '../component/Nav/Nav'
import PageHeader from '../component/PageHeader/PageHeader'
import ProductContents from '../component/ProductContents/ProductContents'


const info = {
 name: "keycaps",
 details: "View our in-stock and pre-order keycaps.",
}
const Keycaps = () => {
 document.title = `Keycaps - MechKBD`
 useEffect(() => {
  window.scrollTo(0,0)
 }, [])
 return (
  <div>
   <Nav/>
   <BreadCrumbs page={info.name} />
   <PageHeader name={info.name} desc={info.details}/>
   <ProductContents/>
   <Footer/>
  </div>
 )
}

export default Keycaps
