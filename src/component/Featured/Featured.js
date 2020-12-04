import React, { useEffect } from 'react'
import "./Featured.scss"
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


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

  useEffect(() => {
    gsap.from(".header-0", {
      scrollTrigger: {
        trigger: '.header-0',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".header-1", {
      scrollTrigger: {
        trigger: '.header-1',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".header-2", {
      scrollTrigger: {
        trigger: '.header-2',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".header-3", {
      scrollTrigger: {
        trigger: '.header-3',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".header-4", {
      scrollTrigger: {
        trigger: '.header-4',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".btn-0", {
      scrollTrigger: {
        trigger: '.btn-0',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".btn-1", {
      scrollTrigger: {
        trigger: '.btn-1',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".btn-2", {
      scrollTrigger: {
        trigger: '.btn-2',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".btn-3", {
      scrollTrigger: {
        trigger: '.btn-3',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })
    gsap.from(".btn-4", {
      scrollTrigger: {
        trigger: '.btn-4',
        start: "top bottom"
      },
      y: 50,
      opacity: 0,
      duration: .8,
      ease: Power3.easeIn
    })

  }, [])


 return (
  <div className="featured">
   <div className="featured-firstrow">
   {data1.map((da, index) => (
    <div className="featured-card" key={index}>
     <div className="featured-overlay">
      <h3 className={`featured-header header-${index}`}>{da.name}</h3>
      <button className={`featured-btn btn-${index}`}>Pre-order</button>
     </div>
     <img src={da.url} alt=""/>
    </div>
   ))}
   </div>
   <div className="featured-secondrow">
   {data2.map((da, index) => (
    <div className="featured-card" key={index}>
     <div className="featured-overlay">
      <h3 className={`featured-header header-${index + 2}`}>{da.name}</h3>
      <button className={`featured-btn btn-${index + 2}`}>Pre-order</button>
     </div>
     <img src={da.url} alt=""/>
    </div>
   ))}
   </div>
   
  </div>
 )
}

export default Featured
