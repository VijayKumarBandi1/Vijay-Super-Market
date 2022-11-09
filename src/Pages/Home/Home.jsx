import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Product from '../../Components/Products/Product'
import { useLocation } from 'react-router-dom'
function Home() {

const location=useLocation()
console.log(location)
  return (
    <>
    <Navbar/>
    <Product user={location}/>
    </>
  )
}

export default Home
