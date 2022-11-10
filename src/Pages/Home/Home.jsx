import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Product from '../../Components/Products/Product'
import { useLocation } from 'react-router-dom'

import BuyProduct from '../../Components/Products/BuyProduct'

function Home() {

  const location = useLocation()
  console.log(location)
  return (
    <>
      <Navbar user={location}/>
      <Product path="/" user={location} />
    </>
  )
}

export default Home
