import { Link } from 'react-router-dom';

import  UsePost  from "./Post";
import { useState , useEffect } from 'react';
import { useHistory } from "react-router-dom";
const Login = () => {
  const [email,setinput1] = useState('');
  const [password,setinput2] = useState('');
  const [pending='',setpending] = useState(false);
  const [exists,setexists] = useState(false)
  
  
  
  const handlesubmit = (e)=> {
      e.preventDefault();
      const details = {email,password};
      setpending(true);
      

      fetch('http://localhost:3004/details/',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(details)
      }).then(()=>{

          setpending(false);
      })
  };
    return (
        
              <div className="login">
                <h1>Login</h1>
                <form className='forms' >
                  <label>Email Address</label>
                    <input type="text" required value={email} onChange={(e)=>{setinput1(e.target.value)}}></input><br /><br />
                  <label className="passl">Password</label>
                    <input type="password" required value={password} onChange={(e)=>{setinput2(e.target.value)}}></input><br /><br />
                  <button onClick={handlesubmit}> Login </button>
                  <Link to="/signup"><label className="sred">Create New Account</label></Link>
                </form>
              </div>
            
      );
}
 
export default Login;