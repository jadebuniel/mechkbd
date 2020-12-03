import React from 'react'
import "./Social.scss"

const icons = [
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Instagram-Kono-Store-Button_c969c7c5-2d01-49ee-bc1d-32459df7d8e1_160x161.png?v=1538527855',
  name: "instagram"
 },
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Twitter-Kono-Store-Button_160x161.png?v=1538527870',
  name: "twitter"
 },
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Facebook-Kono-Store-Button_160x161.png?v=1538527891',
  name: "facebook"
 },
 {
  url: 'https://cdn.shopify.com/s/files/1/1994/3097/files/Email-Kono-Store-Icon_160x161.png?v=1538527930',
  name: "mail"
 }
]

const Social = () => {
 return (
  <div className="social">
   <p className="social-invite">Follow our official accounts</p>
   <div className="social-container">
    {icons.map((icon, index) => (
     <img src={icon.url} alt={icon.name} key={index}/>
    ))}
   </div>
   
  </div>
 )
}

export default Social
