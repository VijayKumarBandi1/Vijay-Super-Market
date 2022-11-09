import React from 'react'
import Home from '../Pages/Home/Home';
import Profile from '../Pages/Profille/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import ProductsList from '../Components/Products/ProductsList';

function Router() {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/Register' element={<Register />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/profile' element={<Profile />} />
              <Route exact path='/admin' element={<ProductsList />} />
            </Routes>
          </BrowserRouter>
        </>
      );
}

export default Router
