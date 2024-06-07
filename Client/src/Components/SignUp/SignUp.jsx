import React, { useState } from 'react';
import "./SignUp.css";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [email, setEmail] = useState("");
    const [showEmailPrompt, setShowEmailPrompt] = useState(false);
    const [showUsernamePrompt, setShowUsernamerompt] = useState(false);

    const handleEmailFocus = () => {
        setShowEmailPrompt(true);
    };

    const handleEmailBlur = () => {
        setShowEmailPrompt(false);
    };

    const handleUsernameFocus = () => {
        setShowUsernamerompt(true);
    };

    const handleUsernameBlur = () => {
        setShowUsernamerompt(false);
    }

    return (
        <div className='signup-card'>
            <img id="login-logo" src="/Images/logo.png" alt="Login" />
            <h6>Cloaked</h6>
            <div className='login-form'>
                {showUsernamePrompt && <div className="email-prompt">Please do not use your real Identity.</div>}
                <div className='login-sub-from'>
                    <input 
                        onChange={(e) => {setUsername(e.target.value)}} 
                        onFocus={handleUsernameFocus} 
                        onBlur={handleUsernameBlur}
                        className='login-field' 
                        name='username' 
                        type="text" 
                        placeholder='Username'
                    />
                </div>
                <div className='login-sub-form'>  
                    <input 
                        onChange={(e) => {setPassword(e.target.value)}} 
                        className='login-field' 
                        name='password' 
                        type="text" 
                        placeholder='Password'
                    />
                </div>
                {showEmailPrompt && <div className="email-prompt">Please use your college email address.</div>}
                <div className='login-sub-form'>  
                    <input 
                        onChange={(e) => {setEmail(e.target.value)}} 
                        onFocus={handleEmailFocus} 
                        onBlur={handleEmailBlur}
                        className='login-field' 
                        name='email' 
                        type="text" 
                        placeholder='Your College E-mail'
                    />
                   
                </div>
                <button className='login-btn' type="submit">Sign Up</button>
            </div>
            <br />
            <div className='signup-post-form post-t1'>
                Have an account? Sign In
            </div>
        </div>
    );
}

export default Signup;
