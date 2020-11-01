import React, { useState,useContext } from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import  {UserContext}  from '../App'

const Signin=()=>{
     
    const {state,dispatch} =useContext(UserContext)
    console.log(state);
    const history=useHistory()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const postdata=()=>{

       fetch('/signin',{

        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })

        
       }).then(res=>res.json())
       .then(data=>{

      
          
        
            if(data.error)
            {
              M.toast({html:data.error,classes:'#b71c1c red darken-4'})
              
              
            }
            else{
              console.log(data);
              localStorage.setItem('jwt',data.token)
              const user={
                id:data._id,
                name:data.name,
                email:data.email,

              }

              localStorage.setItem('user',JSON.stringify(user))
              dispatch({action:"USER",payload:user})
              

              M.toast({html:"Signedin Successfully !",classes:'#1b5e20 green darken-4'})
              history.push('/')
             
            }
       })
       
      
      
    }
    return (
        <div className="card">
          <div className="auth-card headers">
           <h2>Credential Management</h2>    
          
            <input
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             type="text" className="input-field" placeholder="email"></input>
            <input
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             type="text" className="input-field" placeholder="password"></input>

            <button  class="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
            
            onClick={()=>postdata()}
            >Signin
             
              </button>

              <h4><Link to="/signup">Need an account ?</Link></h4>

          </div>
        </div>
    )
}
export default Signin




