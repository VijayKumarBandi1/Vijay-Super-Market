import React, { useRef, useState } from 'react'
import './Navbar.css'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import vijay from "../../Assets/Images/vj.jpg"

function Navbar({user}) {
     const navigate=useNavigate()
    const [isOpen, setIsOpen]=useState(false)
    const handlerNav=()=>{
      setIsOpen(true)
    }
    const SecondHandel=()=>{
      setIsOpen(false)

    }
     
    const logOut=()=>{
      if(window.confirm("are you sure logout")==true){
        navigate("/")
      }
    }

    const navigateToHome = ()=>{
      navigate("/home",{state:user})
    }

    return (
        <div className='nav'>
            <div className='nav-left'>
              <div className="logo">
                
              <img  src={vijay} />
              </div>
                <h1>Vijay Super Market</h1>
            </div>
            <div className={isOpen? "nav-right":"nav-close" }>
                <ul>
                    <li><a href='' onClick={navigateToHome}>Home</a></li>
                    <li><a href='/profile'>profile</a></li>
                    <li><a href='/help'>Help</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href='' onClick={logOut}>Logout</a> </li>
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
