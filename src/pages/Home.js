import React, {useEffect} from 'react'
import Carousel from '../component/Carousel/Carousel'
import Categories from '../component/Categories/Categories'
import Design from '../component/Design/Design'
import Featured from '../component/Featured/Featured'
import Footer from '../component/Footer/Footer'
import Nav from '../component/Nav/Nav'
import Social from '../component/Social/Social'
import Video from '../component/Video/Video'

const Home = () => {
 document.title = `MechKBD - Keyboard Enthusiasts One Stop Shop`
   useEffect(() => {
   window.scrollTo(0,0)
 }, [])
 return (
  <div>
   <Nav/>
   <Carousel/>
   <Categories/>
   <Featured/>
   <Video/>
   <Social/>
   <Design/>
   <Footer/>
   
  </div>
 )
}

export default Home
