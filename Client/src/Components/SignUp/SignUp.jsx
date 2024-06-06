import React, { useState } from 'react'

import "./SignUp.css"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [email, setEmail] = useState("");

    return (
        <div className='signup-card'>
            <img id="login-logo" src="/Images/logo.png" alt="Login" />
            <div className='login-form'>
                <div className='login-sub-from'>
                    <input onChange={(e) => {setUsername(e.target.value)}} className='login-field' name='username' type="text" placeholder='Username'/>
                </div>
                <div className='login-sub-form'>  
                    <input onChange={(e) => {setPassword(e.target.value)}} className='login-field' name='password' type="text" placeholder='Password'/>
                </div>
                <div className='login-sub-form'>  
                    <input onChange={(e) => {setEmail(e.target.value)}} className='login-field' name='email' type="text" placeholder='E-mail address'/>
                </div>
                <hr />
                <button className='login-btn' type="submit">Sign Up</button>
            </div>
            <br />
            <div className='signup-post-form, post-t1'>
                Have an account? Sign In
            </div>
        </div>
    )
}

export default Signup