import React from 'react'
import { Link } from "react-router-dom"
import "./BreadCrumbs.scss"

const BreadCrumbs = ({previous, page}) => {
 return (
  <div className="bread-crumbs">
    {previous.map((prev, index) => (
      <>
        <Link to={prev.url} className="home">{prev.name}</Link>
        <span className="fas fa-chevron-right"></span>
      </>
    ))}
    <p className="current-page">{page}</p>
   
  </div>
 )
}
export default BreadCrumbs
