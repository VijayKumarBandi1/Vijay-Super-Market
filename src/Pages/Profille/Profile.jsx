import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Login from '../Login/Login'
import {Link} from 'react-router-dom'
import './Profile.css'

function Profile() {
  return (
   
     <div className="ProfileMain">
     <div className="Profile">
        <Link to={'/Login'}>
        <button className='btn btn-primary button'>Login</button>
        </Link>
        <Link to={'/Register'}>
        <button className='btn btn-primary button'>Register</button>
        </Link>
      </div>
     </div>
   
  )
}

export default Profile
