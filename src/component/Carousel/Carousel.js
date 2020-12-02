import React, { useState, useEffect, useRef } from 'react'
import "./Carousel.scss"

const images = ["carousel1", "carousel2", "carousel3", "carousel4", "carousel5"]

const Carousel = () => {
 const [current, setCurrent] = useState(4)
 const autoPlay = useRef()

 useEffect(() => {
  autoPlay.current = handleNext
 })
 useEffect(() => {
  const play = () => {
   autoPlay.current()
  }
  const interval = setInterval(play, 10000)
 }, [])

 const handleNext = () => {
  setCurrent(current === images.length - 1 ? 0 : current + 1)
 }
 const handlePrev = () => {
  setCurrent(current === 0 ? images.length - 1 : current - 1)
 }
 return (
  <div className="carousel">
  {current === 0 && (
   <div className="carousel-cell carousel-1" style={{animation: "carouselAnim 1s ease forwards"}}>
    <div className="carousel-overlay-right">
      <div className="overlay-container">
           <h2 className="carousel-header right">Miami Nights</h2>
           <p className="carousel-desc right">Lorem ipsum dolor.</p>
           <button className="carousel-btn right">View Details</button>
      </div>
    </div>
   </div>
   )}
   
  {current === 1 && (
   <div className="carousel-cell carousel-2" style={{animation: "carouselAnim 1s ease forwards"}}>
      <div className="carousel-overlay-right">
       <div className="overlay-container">
            <h2 className="carousel-header right">GMK TA 90</h2>
            <p className="carousel-desc right">Lorem ipsum dolor.</p>
            <button className="carousel-btn right">View Details</button>
       </div>
    </div>
   </div>
   )}

   {current === 2 && (
   <div className="carousel-cell carousel-3" style={{animation: "carouselAnim 1s ease forwards"}}>
     <div className="carousel-overlay-left">
       <div className="overlay-container">
            <h2 className="carousel-header left">KBD67 MK I</h2>
            <p className="carousel-desc left">Lorem ipsum dolor.</p>
            <button className="carousel-btn left">View Details</button>
       </div>
    </div>
   </div>
   )}

   {current === 3 && (
   <div className="carousel-cell carousel-4" style={{animation: "carouselAnim 1s ease forwards"}}>
     <div className="carousel-overlay-left">
       <div className="overlay-container">
            <h2 className="carousel-header left">Glorious Holy Panda</h2>
            <p className="carousel-desc left">Lorem ipsum dolor.</p>
            <button className="carousel-btn left">View Details</button>
       </div>
    </div>
   </div>
   )}

 {current === 4 && (
   <div className="carousel-cell carousel-5" style={{animation: "carouselAnim 1s ease forwards"}}>
     <div className="carousel-overlay-center">
       <div className="overlay-container">
            <h2 className="carousel-header center">Year-end Sale</h2>
            <p className="carousel-desc center">Lorem ipsum dolor.</p>
            <button className="carousel-btn center">Shop Now</button>
       </div>
    </div>
   </div>
   )}
    <button className="prev-btn" onClick={() => handlePrev()}><i className="fas fa-chevron-left"></i></button>
    <button className="next-btn" onClick={() => handleNext()}><i className="fas fa-chevron-right"></i></button>
    <div className="bar-container">
     {images.map((image, index) => (
      <div className={current === index ? "bar active" : "bar"} key={index}></div>
     ))}
    </div>
  </div>
 )
}

export default Carousel
