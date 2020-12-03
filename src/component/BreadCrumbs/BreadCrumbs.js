import React from 'react'
import { Link } from "react-router-dom"
import "./BreadCrumbs.scss"

const BreadCrumbs = ({page}) => {
 return (
  <div className="bread-crumbs">
    <Link to='/' className="home">Home</Link>
    <span className="fas fa-chevron-right"></span>
    <p className="current-page">{page}</p>
   
  </div>
 )
}
export default BreadCrumbs
