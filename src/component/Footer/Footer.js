import React from 'react'
import "./Footer.scss"

const Footer = () => {
 return (
  <div className="footer">
   <div className="footer-container">
    <div className="footer-mailing">
     <h1 className="footer-header">Join our Mailing List</h1>
     <p className="mailing-desc">Get our newsletter and notifications when we launch new products!</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="email" className="mailing-input" placeholder="Email Address"/>
         <button className="mailing-btn">Subscribe</button>
      </form>
    </div>
    <div className="footer-social">
     <h1 className="footer-header">Follow us</h1>
     <div className="footer-icons">
      <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
      <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a>
      <a href="https://gmail.com/"><i className="fas fa-envelope"></i></a>
     </div>
    </div>
   </div>
   
  </div>
 )
}

export default Footer
