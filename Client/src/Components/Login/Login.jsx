import React, { useCallback, useState } from 'react'
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className='login-card'>
            <img id="login-logo" src='/Images/logo.png' alt="Login" />
            <h6>Cloaked</h6>
            <div className='login-form'>
                <div className='login-sub-from'>
                    <input className='login-field' onChange={(e) => {setEmail(e.target.value)}} type="text" name='email' placeholder='Enter College Email'/>
                </div>

                <div className='login-sub-form'>  
                    <input className='login-field' onChange={(e) => {setPassword(e.target.value)}} name='password' type="text" placeholder='Password'/>
                </div>
                <br />
                <button className='login-btn' type="submit">Sign In</button>
            </div>
            <div className='login-post-form'>
                <div className='post-t1'>Forgot Password?</div>
                <div className='post-t2'>Sign Up</div>
            </div>
        </div>
    )
}

export default Login
