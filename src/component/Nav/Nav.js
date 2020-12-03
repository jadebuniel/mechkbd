import React, { useState, useEffect } from 'react'
import "./Nav.scss"
import { Link } from "react-router-dom"

const Nav = () => {
 const [hamburger, setHamburger] = useState(false)
 const [browserWidth, setBrowserWidth] = useState(1940)
 const [location, setLocation] = useState("")
 const url = window.location.href.split('/')
 window.addEventListener("resize", (e)=> {
  setBrowserWidth(e.target.innerWidth)
 })

 useEffect(() => {
  if (browserWidth >= 560){
   setHamburger(false)
   if (url[url.length - 1]){
    setLocation(url[url.length - 1])
   }
  }
 })
 return (
  <div className="nav">
   <div className="nav-container">
    <div className="logo">
     <Link to="/"><h1>MECHKBD</h1></Link>
     <div className="hamburger" onClick={() => setHamburger(!hamburger)}> {hamburger ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>} </div>
     </div>
    <ul className="nav-list" style={{height: hamburger ? "204px" : "0", paddingTop: hamburger ? "1rem" : "0", animation: hamburger && "fade 1s ease forwards"}}>
      <Link to="/products"><li className="nav-item" style={{fontWeight: location === "products" ? "500" : "400", borderBottom: location === "products" ? "black solid 2px" : "none" }}>Products</li></Link>
      <Link><li className="nav-item">FAQ</li></Link>
      <Link><li className="nav-item">Articles</li></Link>
      <Link><li className="nav-item">What's hot?</li></Link>
    </ul>
   </div>
   
  </div>
 )
}

export default Nav

