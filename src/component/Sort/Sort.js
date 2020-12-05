import React, { useState } from 'react'
import './Sort.scss'

const Sort = () => {
 const [grid, setGrid] = useState(true)
 return (
  <div className="sort">
   <div className="view-as">
    <h3 className="view-header">View as</h3>
     <div className="view-icon">
       <i className={grid ? "fas fa-th-large view-active" : "fas fa-th-large"} onClick={() => setGrid(true)}></i>
       <i className={grid ? "fas fa-list" : "fas fa-list view-active"} onClick={() => setGrid(false)}></i>
   </div>
   </div>
  </div>
 )
}

export default Sort
