import React, { useState, useEffect, useContext } from 'react'
import "./Nav.scss"
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'


const Nav = () => {
 const [cart] = useContext(CartContext)
 const [hamburger, setHamburger] = useState(false)
 const [browserWidth, setBrowserWidth] = useState(1940)
 const [location, setLocation] = useState([])
 const url = window.location.href.split('/')

 window.addEventListener("resize", (e)=> {
  setBrowserWidth(e.target.innerWidth)
 })

 const badgeStyle = {
  display: cart.total_items ? "grid" : "none"
}

 useEffect(() => {
  if (browserWidth >= 560){
   setHamburger(false)
  }
  if (url){
  setLocation(url)
  }
 },[])
 return (
  <div className="nav">
   <div className="nav-container">
    <div className="logo">
     <div className="hamburger" onClick={() => setHamburger(!hamburger)}> {hamburger ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>} </div>
     <Link to="/" ><h1 onClick={() => setHamburger(false)}>MECHKBD</h1></Link>
    <div className="cart-mobile">
      <div className="badge" style={badgeStyle}>{cart.total_items ? cart.total_items : null}</div>
      <Link to='/cart' onClick={() => setHamburger(false)}><span className="fas fa-shopping-cart"></span></Link>
    </div>
     </div>



    <ul className="nav-list" style={{height: hamburger ? "160px" : "0", paddingTop: hamburger ? "1rem" : "0", animation: hamburger && "fade 1s ease forwards"}}>
      <Link to="/products"><li className="nav-item" style={{fontWeight: location.includes("products") ? "500" : "400", borderBottom: location.includes("products") ? "black solid 2px" : "none" }} onClick={() => setHamburger(false)}>Products</li></Link>
      <Link><li className="nav-item" onClick={() => setHamburger(false)}>FAQ</li></Link>
      <Link><li className="nav-item" onClick={() => setHamburger(false)}>Articles</li></Link>
    </ul>



    <div className="cart-wide">
      <div className="badge" style={badgeStyle}>{cart.total_items ? cart.total_items : null}</div>
      <Link to='/cart' onClick={() => setHamburger(false)}><span className="fas fa-shopping-cart"></span></Link>
    </div>


   </div>
   
  </div>
 )
}

export default Nav

