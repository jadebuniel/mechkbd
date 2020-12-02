import React from 'react'
import "./Featured.scss"


const data1 = [
 {
  name: "GMK Ishtar",
  url: "https://cdn.shopify.com/s/files/1/1994/3097/products/iron165.968_2400x1350.png?v=1595367722"
 },
 {
  name: "GMK Shoko",
  url: "https://cdn.shopify.com/s/files/1/1994/3097/products/Arctic-Doppelganger_2400x1350.png?v=1586285616"
 }
]
const data2 =[
  {
  name: "GMK Deku",
  url: "https://cdn.shopify.com/s/files/1/1994/3097/products/aki-deku.51_1500x844.png?v=1593716408"
 },
 {
  name: "KAT Cyberspace",
  url: "https://cdn.shopify.com/s/files/1/1994/3097/products/haus_1600x900.png?v=1596244222"
 },
 {
  name: "KAT Lala",
  url: "https://cdn.shopify.com/s/files/1/1994/3097/products/03.KAT_LALA3_2400x1523.png?v=1601057984"
 }
]

const Featured = () => {
 return (
  <div className="featured">
   <div className="featured-firstrow">
   {data1.map((da, index) => (
    <div className="featured-card" key={index}>
     <div className="featured-overlay">
      <h3 className="featured-header">{da.name}</h3>
      <button className="featured-btn">Pre-order</button>
     </div>
     <img src={da.url} alt=""/>
    </div>
   ))}
   </div>
   <div className="featured-secondrow">
   {data2.map((da, index) => (
    <div className="featured-card" key={index}>
     <div className="featured-overlay">
      <h3 className="featured-header">{da.name}</h3>
      <button className="featured-btn">Pre-order</button>
     </div>
     <img src={da.url} alt=""/>
    </div>
   ))}
   </div>
   
  </div>
 )
}

export default Featured
