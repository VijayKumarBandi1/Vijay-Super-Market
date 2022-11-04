import React, { useRef, useState } from 'react'
import './Navbar.css'
import {AiOutlineMenuUnfold} from 'react-icons/ai'

import {FaTimes} from 'react-icons/fa'

function Navbar() {

    const [isOpen, setIsOpen]=useState(false)
    const handlerNav=()=>{
      setIsOpen(true)
    }
    const SecondHandel=()=>{
      setIsOpen(false)

    }
    return (
        <div className='nav'>
            <div className='nav-left'>
                <h1>Vijay Super Market</h1>
            </div>
            <div className={isOpen? "nav-right":"nav-close" }>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/profile'>profile</a></li>
                    <li><a href='/help'>Help</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href="/admin">Admin Login</a> </li>
                </ul>
            </div>
             <div className='icon-h '>
              <button className='ui button' onClick={handlerNav}  style={{display:isOpen?"none" :"block"}}>
               <AiOutlineMenuUnfold/>
              </button>
              <button className='ui button'  onClick={SecondHandel} style={{display:isOpen?"block" :"none"}}>
               <FaTimes/>
              </button>
              
             </div>
        </div>
        
      )
}

export default Navbar
