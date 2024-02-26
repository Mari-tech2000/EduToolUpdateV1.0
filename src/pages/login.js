import React from 'react'
import "U:/website/edutool/src/components/shared/style/login.css"
import { Link } from 'react-router-dom';
import "U:/website/edutool/src/components/shared/style/style.css";
import TextField from '@mui/material/TextField';

function Logins(){
return (
    <>
       <h4>Welcome Back</h4> 
    <div className='text-box'>
  
    <TextField
          id="outlined-password-input"
          label="Mail / Phone No"
          type="email"
          style={{width:"100%"}}
        />
       
     <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{marginTop:"5px", width:"100%"}}
          
        />
      
        <Link to="/feed" ><button className='btn-login' style={{width:"100%"}}>Login</button></Link>
      <br></br>
  <Link to="/register"><button className='btn-login' style={{width:"100%"}}>Register</button></Link>

  </div>
  </>
)
}
export default Logins;