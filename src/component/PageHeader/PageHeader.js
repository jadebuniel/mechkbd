import React from 'react'
import './PageHeader.scss'

const PageHeader = ({ name, desc }) => {
 return (
  <div className="page-heading">
   <h1 className="page-header">{name}</h1>
   <h3 className="page-desc">{desc}</h3>
  </div>
 )
}

export default PageHeader
