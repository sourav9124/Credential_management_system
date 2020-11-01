import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import  {UserContext}  from '../App'


const Navbar=()=>{
  
  const {state,dispatch} =useContext(UserContext)
  const renderLinks=()=>{

  
    console.log("The state is "+state);
    if(!state)
    {
      return [
 
                 <li><Link to="/">Home</Link></li>,
                 <li><Link to="/profile">Profile</Link></li>,
                 <li><Link to="/createPassword">Create</Link></li>,
                 <li><Link to="/signup">Signup</Link></li>,
                 <li><Link to="/signin">Signin</Link></li> 
      ]

    }
}


   return(
    <nav>
    <div className="nav-wrapper white">
        <Link to={state?'/':'/signin'} className="brand-logo left">Credential Application</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
         {renderLinks()}

        
        
      </ul>
    </div>
  </nav>

   );



}
export default Navbar
