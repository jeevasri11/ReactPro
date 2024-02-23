import React from 'react'
import './Registercss.scss';
import { Link } from 'react-router-dom'
import Zom from './Images/login1.png';
function Register() {
  return (
    <div className='box'>
   
      <Link to='/login' >
        <button>  
            Go to Log in
        </button>
      </Link>
      <img src={Zom}/>
    </div>
  )
}

export default Register
