import React,{useState,useEffect} from 'react'
import Announcements from '../Components/Announcements'
import Categories from '../Components/Categories'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import MovingBanner from '../Components/MovingBanner'

function Home() {

  const [token,setToken] = useState('')


  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <MovingBanner/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home