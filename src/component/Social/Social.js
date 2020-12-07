import React, { useEffect } from 'react'
import "./Social.scss"
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const icons = [
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Instagram-Kono-Store-Button_c969c7c5-2d01-49ee-bc1d-32459df7d8e1_160x161.png?v=1538527855',
  name: "instagram",
  redirect: 'http://www.instagram.com'
 },
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Twitter-Kono-Store-Button_160x161.png?v=1538527870',
  name: "twitter",
  redirect: 'http://www.twitter.com'
 },
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Facebook-Kono-Store-Button_160x161.png?v=1538527891',
  name: "facebook",
  redirect: 'http://www.facebook.com'
 },
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Email-Kono-Store-Icon_160x161.png?v=1538527930',
  name: "mail",
  redirect: 'http://www.gmail.com'
 }
]

const Social = () => {
 useEffect(() => {
  gsap.from('.social-icons', {
   scrollTrigger: {
    trigger: ".social-icons",
    start: "top 75%"
   },
   scale: .5,
   duration: .5,
   stagger: .25,
   ease: Power3.easeIn
  })
 }, [])

 return (
  <div className="social">
   <p className="social-invite">Follow our official accounts</p>
   <div className="social-container">
    {icons.map((icon, index) => (
     <a href={icon.redirect}><img src={icon.url} alt={icon.name} key={index} className="social-icons"/></a>
    ))}
   </div>
   
  </div>
 )
}

export default Social
