import React, { useState, useEffect } from 'react'
import "./Nav.scss"

const Nav = () => {
 const links = ["Products", "FAQ", "Articles", "What's hot?"]
 const [hamburger, setHamburger] = useState(false)
 const [browserWidth, setBrowserWidth] = useState(1940)
 window.addEventListener("resize", (e)=> {
  setBrowserWidth(e.target.innerWidth)
 })

 useEffect(() => {
  if (browserWidth >= 560){
   setHamburger(false)
  }
 })
 return (
  <div className="nav">
   <div className="nav-container">
    <div className="logo">
     <h1>MECHKBD</h1>
     <div className="hamburger" onClick={() => setHamburger(!hamburger)}> {hamburger ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>} </div>
     </div>
    <ul className="nav-list" style={{height: hamburger ? "204px" : "0", paddingTop: hamburger ? "1rem" : "0", animation: hamburger && "fade 1s ease forwards"}}>
     {links.map((link, index) => (
      <li className="nav-item" key={index}>{link}</li>
     ))}
    </ul>
   </div>
   
  </div>
 )
}

export default Nav

