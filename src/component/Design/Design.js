import React, { useEffect } from 'react'
import "./Design.scss"
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Design = () => {
 useEffect(() => {
  gsap.from('.design-header', {
   scrollTrigger: {trigger: '.design-header', start: 'top bottom'},
   y: 50,
   opacity: 0,
   duration: .8,
   ease: Power3.easeIn
  })
  gsap.from('.design-desc', {
   scrollTrigger: {trigger: '.design-header', start: 'top bottom'},
   y: 50,
   opacity: 0,
   duration: .8,
   ease: Power3.easeIn,
   delay: .3
  })
  gsap.from('.design-btn', {
   scrollTrigger: {trigger: '.design-header', start: 'top bottom'},
   y: 50,
   opacity: 0,
   duration: .8,
   ease: Power3.easeIn,
   delay: .5
  })
 }, [])

 return (
  <div className="design">
   <div className="design-overlay">
    <h3 className="design-header">Contribute your Design!</h3>
    <p className="design-desc">Want to share your product idea here?</p>
    <button className="design-btn">Get in Touch</button>
   </div>
   <img src="https://keyboardwhiz.com/wp-content/uploads/2018/10/10-Reasons-to-buy-a-Mechanical-Keyboard-1-1024x683.jpg" alt=""/>
  </div>
 )
}

export default Design
