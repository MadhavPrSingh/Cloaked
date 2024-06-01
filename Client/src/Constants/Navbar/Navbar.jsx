import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className='logo-box'>
                <img className='logo' src="../../Images/logo.png" alt="logo" />
            </div>
            <div>
                <link to ={'/'}>Community</link>
            </div>
            <div>
                <link to ={''}>Jobs</link>
            </div>
            <div>
                <link to ={''}>Courses</link>
            </div>
            <div>
                <link to ={''}>Sign In</link>
            </div>
            <div>
                <link to ={''}>Sign Up</link>
            </div>         
        </div>
        
    )
}

export default Navbar