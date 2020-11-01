import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const CreatePassword=()=>{
   const history=useHistory()
   const [websiteName,setName]= useState("")
   const [password,setPassword]= useState("")
   const [image,setImage]= useState("")
   const [url,setUrl]=useState("")

   
 useEffect(()=>{
   if(url)
   {

   

  fetch('/createPassword',{
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem('jwt')
   },
    body:JSON.stringify({
      websiteName,
      password,
      photo:url
    })

  }).then(res=>res.json())
  .then(data=>{
    //console.log("post created successfully !");

    if(data.error)
    {
     M.toast({html: data.error,classes:'#d50000 red accent-4'})
    }
    else{
     M.toast({html: "password Saved successfully",classes:'#1b5e20 green darken-4'})
     history.push('/')

     
    }
  })
  .catch(err=>{
    console.log(err);
  })
}

 },[url])
   const postDetails=()=>{
    
    const data=new FormData()
    data.append('file',image)
    data.append('upload_preset','project')
    data.append('cloud_name','sourav9124')

    fetch('https://api.cloudinary.com/v1_1/sourav9124/image/upload',{

       method:'post',
       body:data
    }).then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })

    

   }


  

    return (

        <div className="card card-header">
            <div className="card-container">
            <h3 className="create">CreatePassword</h3>
              <input 
                value={websiteName}
                onChange={(e)=>setName(e.target.value)}
               type="text" placeholder="website name"/>
              <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              
                type="text" placeholder="password"/>
              <div class="file-field input-field ">
      <div class="btn #1976d2 blue darken-2">
        <span>Upload Image</span>
        <input
       
        onChange={(e)=>setImage(e.target.files[0])}
         className="files " type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
              

              <button class="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
               onClick={()=>postDetails()}
              >CreatePassword
             
              </button>

              

            </div>
        </div>

    );
}
export default CreatePassword