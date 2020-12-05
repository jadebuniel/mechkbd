import React, {useEffect} from 'react'
import "./Filter.scss"
import { useHistory } from "react-router-dom"


const Filter = () => {
   const history = useHistory()
   const redirectPage = (e) => {
      history.push(`/products/${e.target.id}`)
   }
   
   useEffect(() => {
   const url = window.location.href.split('/')
   const checkRadio = () => {
      const specificRadio = document.getElementById(url[url.length - 1])
       if (specificRadio) {
          specificRadio.checked = `true`
       }
    }
    checkRadio()

 }, [])


 return (
  <div className='filter'>
   <h2 className="filter-header">Filters</h2>
   <div className="filter-content">
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
  </div>
 )
}

export default Filter
