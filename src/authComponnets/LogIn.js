import React from 'react'
import { Link } from 'react-router-dom'
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import { useState } from 'react';

const LogIn = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    return (
      <>
      <div className="main-comp">
           <div className="logo">
               <img src=""/>
           </div>


           <div className="log-form">
               <div className="logss">
               <form  autoComplete="off"
                onSubmit="">
                <span className="log">Log in</span>
               
               
               
                <div className="form">
                <EmailIcon className="account"/> 
                <input type="email" 
                 id="email"
                 name="email"
                 value={email}
                 disabled
                 placeholder="Enter your email"/>
               
                </div>


                <div className="form">
                <LockIcon className="account"/> 
                <input type="password"
                 disabled
                 id="password"
                 value={password} 
                 onChange={(e)=> setPassword(e.target.value)} 
                 placeholder="Enter your password"/>
                </div>
               
               
               
                <div className="sign">
                <button
                className="button"
                type="submit">Log in</button>
                
                
                </div>
                 
                <Link className="forgot" to="/signup"> New user please Sign up ?</Link>
                
                
            </form>
               
        </div>

             
              
    </div>
        <div className="bottom-sec">
        <span className="term">Terms of use &emsp; compilance &emsp; Support &emsp; Contacts </span>
        <br/>
        <span className="terms">@2019 aisme all rights reserved ..</span>
        </div>
    </div>

      </>
    )
}

export default LogIn
