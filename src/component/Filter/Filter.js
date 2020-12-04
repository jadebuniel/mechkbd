import React from 'react'
import "./Filter.scss"
import { useHistory } from "react-router-dom"

const Filter = () => {
 const history = useHistory()
 const redirectPage = (e) => {
  history.push(`/products/${e.target.id}`)
 }


 return (
  <div className='filter'>
   <h2 className="filter-header">Filters</h2>
   <div className="filter-container">
    <input type="radio" name="filter" id="keyboards" className="checkbox" onChange={(e) => redirectPage(e)}/><label htmlFor="keyboards">keyboards</label>
   </div>
   <div className="filter-container">
    <input type="radio" name="filter" id="keycaps" className="checkbox" onChange={(e) => redirectPage(e)}/><label htmlFor="keycaps">keycaps</label>
   </div>
   <div className="filter-container">
    <input type="radio" name="filter" id="switches" className="checkbox" onChange={(e) => redirectPage(e)}/><label htmlFor="switches">switches</label>
   </div>
   <div className="filter-container">
    <input type="radio" name="filter" id="miscellaneous" className="checkbox" onChange={(e) => redirectPage(e)}/><label htmlFor="miscellaneous">miscellaneous</label>
   </div>
  </div>
 )
}

export default Filter
