import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
const Signup=()=>{
   const history=useHistory()
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   
   const postdata=(e)=>{
     if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
      {
        M.toast({html:"invalid email!",classes:'#b71c1c red darken-4'})
        return 
      }
      fetch('/signup',{

        method:"post",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify({
           name:name,
           email:email,
           password:password
        })

      }).then(res=>res.json())
     .then(data=>{

     if(data.error)
     {
      M.toast({html: data.error,classes:'#d50000 red accent-4'})
     }
     else{
      M.toast({html: data.message,classes:'#1b5e20 green darken-4'})
      history.push('/signin')

      
     }
    })


   }
    return (
        <div className="card">
          <div className="auth-card headers">
           <h2>Credential Application</h2>
           <input type="text" className="input-field" placeholder="name"
             value={name}
             onChange={(e)=>{setName(e.target.value)}}
           ></input>
            <input type="text" className="input-field" placeholder="email"
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
            ></input>
            <input type="text" className="input-field" placeholder="password"
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
            ></input>
                                                                    
            <button className="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
             onClick={()=>postdata()}
            >Signup
             
              </button>

              <h4><Link to="/signin">Already have an account ?</Link></h4>

          </div>
        </div>
    )
}
export default Signup