import React from 'react'
import "./Category.scss"
import { Link } from 'react-router-dom'

const data = [
 {
  url: "https://images.mmorpg.com/images/contentImages/222020/11.jpg",
  type: "keyboards"
 },
 {
  url: "https://i.imgur.com/3JLQV9u.jpg",
  type: "keycaps"
 },
 {
  url: "https://mykeyboard.eu/media/cache/44/8a/448a65280f5ff1e8da59207a7156f078.jpg",
  type: "switches"
 },
 {
  url: "https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_600,h_600/https://jujucables.com/wp-content/uploads/2020/10/20201014_123144.jpg",
  type: "miscellaneous"
 },
]

const Categories = () => {
 return (
  <div className="categories">
    {data.map((da, index) => (
      <div className="category-card" key={index}>
       <Link to={`/products/${da.type}`}><img src={da.url} alt="" className="category-image"/></Link>
       <Link to={`/products/${da.type}`}><h3 className="category-name">{da.type}</h3></Link>
      </div>
    ))}
  </div>
 )
}

export default Categories
