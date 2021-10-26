import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
// import logo from "../react-redux.png"
import EmailIcon from '@material-ui/icons/Email';
import { connect } from 'react-redux';
import { useState } from 'react';


import { registerUser } from '../Actions/Auth.actions';



const SignUp = ({dispatchRegisterAction}) => {
    const [name , setName] = useState("");
    
    const [email , setEmail] = useState("");
     const [password , setPassword] = useState("");

     const handleSubmit = (e) => {
     e.preventDefault();
     dispatchRegisterAction(name, email , password , () => 
         console.log("account created successfully"),
         (message) => console.log(`error ${message}`))
     };
     
     

    return (
        <>
         <div className="main-comp">
           <div className="logo">
            <img src=""/>
           </div>


           <div className="log-form">
               <div className="logs">
               <form  autoComplete="off"
                 onSubmit={handleSubmit}>
                <span className="log">Sign in </span>
                <div className="form">
                <AccountCircleIcon className="account"/> 
                <input type="text" 
                 id="user"
                 name="user"
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                 autoFocus
                 placeholder="Enter your user name "/>
               
                </div>
               
               
                <div className="form">
                <EmailIcon className="account"/>
                <input type="email" 
                 id="email"
                 name="email"
                   value={email} 
                  onChange={(e)=> setEmail(e.target.value)}
                 placeholder="Enter your email"/>
                </div>


                <div className="form">
                <LockIcon className="account"/> 
                <input type="password"
                 id="password"
                 name="password" 
                  value={password}  
                  onChange={(e)=> setPassword(e.target.value)}
                 placeholder="Enter your password"/>
                </div>
               
               
               
                <div className="sign">
                <button
                className="button"
                type="submit">Sign in</button>
                </div>

               
                
                
            </form>
               
        </div>

             
              
    </div>
        <div className="bottom-sec">
        <span className="term">Terms of use &emsp; compilance &emsp; Support &emsp; Contacts </span>
        <br/>
        <span className="terms">@2021 Ds all rights reserved ..</span>
        </div>
    </div>

        </>
    )
}
const mapDispatchToProps = dispatch => ({
    dispatchRegisterAction : (name , email , password , onSuccess , onError) => 
    dispatch(registerUser({name , email , password , onSuccess , onError}))
})
export default connect(null , mapDispatchToProps)(SignUp)
