import React from 'react'
const Profile=()=>{
    return (
      <div style={{
        maxWidth:"600px",
        margin:"0px auto"
      }}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid black"
            

          }}>
          <div >
            <img style={{
              width:"160px",
              height:"160px",
              borderRadius:"80px"
            }} src="https://res.cloudinary.com/sourav9124/image/upload/v1604208591/byw5ltnyjmfmnhv3bm9j.jpg"></img>
            
          </div>
          <div >
          <h2>Sourav Singh</h2>
          <div style={{
            display:"flex",
            justifyContent:"space-between",
            width:"103%",
           
          }}>
            <h5>Total Passwords 28</h5>
          
            
          </div>

         
          

          </div>
        </div>
        <div className="gallery">

<img className="item" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
<img className="item" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
<img className="item" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
<img className="item" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
<img className="item" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
<img className="item" src="https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>


</div>
      </div>
    )
}
export default Profile