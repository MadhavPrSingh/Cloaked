import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faHouse, faBriefcase, faBookOpen } from '@fortawesome/free-solid-svg-icons'


import './Navbar.css'

const Navbar = () => {
    return (
        <div id='navbar-main' className='nav'>
            <div className='logo-box'>
                <img id= "nav-logo" className='logo' src={logo1} alt="logo" />
                <h4>Cloaked</h4>
            </div>
            <div className='nav-options-mid'>
                <FontAwesomeIcon icon = {faHouse} style={{ fontSize: '12px' }}/>
                <Link to ={'/'}>Community</Link>
            </div>
            <div className='nav-options-mid'>
                <FontAwesomeIcon icon = {faBriefcase} style={{ fontSize: '12px' }}/>
                <Link to ={'/jobs'}>Jobs</Link>
            </div>
            <div className='nav-options-mid'>
                <FontAwesomeIcon icon = {faBookOpen} style={{ fontSize: '12px' }}/>
                <Link to ={'/courses'}>Courses</Link>
            </div>
            <div className='nav-reg nav-reg-one login'>
                <Link to ={'/signin'}>Sign in</Link>
            </div>
            <div className='nav-reg signup'>
            <Link to='/signup'>
                <span style={{ color: '#EAEAEA' }}>Sign up</span>
            </Link>
            </div>
  
        </div>
        
    )
}

export default Navbar