const express=require('express')
const  mongoose  = require('mongoose')
const router=express.Router()

const Signup=mongoose.model('Signup')
const Password= mongoose.model('Password')
const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')
const { json } = require('express')
const requireLogin= require('../middleware/requireLogin')




router.get('/',(req,res)=>{
    Student.find().then(result=>{
        console.log(result)
        res.json(result)
    }).catch((err)=>{
        console.log(err);
    })

})
router.get('/getdata/:id',(req,res)=>{

    
      const id=req.params.id
        Student.findById(id)
        .then(result=>{
            console.log(result)
            res.json(result)
        }).catch(err=>{
            console.log(err)
        })
})

router.post('/postdata',(req,res)=>{
    const studentdata=new Student({
        name:req.body.name,
        skills:req.body.skills

    })
    studentdata.save().
    then(result=>{
        if(result)
        {
            return res.json(result)
        }
        else{
            return res.json("failed to insert the data")
        }
    }).catch(err=>{
        console.log(err)
    })

})

router.put('/update/:id',(req,res)=>{
    const id=req.params.id
    console.log(id)
    Student.findById(id).then(result=>{
        console.log(result);
        console.log(req.body.name)
        console.log(req.body.skills)
        result.name=req.body.name
        result.skills=req.body.skills
        console.log(result.name)
        console.log(result.skills)
        result.save()
        .then(info=>{
            console.log(info +" Updated successfully !!")
            res.json("data successfully updated")


        })
    }).catch(err=>{
        console.log(err)
    })
    

    
    
    
   
})

router.patch('/update2/:id',(req,res)=>{
    const {name,skills}=req.body
    const {id}=req.params
    const studentdata={
        name:name,
        skills:skills   
       }

    
    Student.findById(id)
    .then(result=>{

       
           result.name=studentdata.name
           result.skills=studentdata.skills
           result.save().
    then(updated=>{
        console.log(updated)
        res.json(updated)
    })

    })
    
})

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password)
    {
        return res.status(401).json({error:'Please fill all the fields !'})
    }
    bcryptjs.hash(password,12).
    then(hashedpassword=>{

        const signup=new Signup({
            name,
            email,
            password:hashedpassword
        })
        signup.save()
        .then(user=>{
            console.log(user)
            return res.json({message:"Data succesfully inserted !"})
        }).catch(err=>{
            console.log(err)
        })

    })
    
})

router.post('/signin',(req,res)=>{
    const {email,password}=req.body
    if(!email || !password)
    {
        return res.status(401).json({error:"Please fill all the fileds"})
    }
    Signup.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser)
        {
            return res.status(422).json({error:"Wrong email or password !"})
        }
        bcryptjs.compare(password,savedUser.password)
        .then(validated=>{
              
            const token=jwt.sign({id:savedUser._id},JWT_SECRET)
            const {_id,name,email}=savedUser
            
            res.json({token:token,_id,name,email})
            //console.log(token + "details " + _id + name + email );
        }) 
        
         
       
    }).catch(err=>{
        console.log(err);
    })
    
})
router.get('/protected',requireLogin,(req,res)=>{
    console.log("This is the protected resource !");
    res.json("This is the protected resource !")
    
})

router.post('/createPassword',(req,res)=>{
    const {websiteName,password,photo}=req.body
    console.log(websiteName+password+photo);
     if(!websiteName || !password || !photo)
     {
         return res.status(401).json({error:'Please fill all the fields !'})
     }
    const post=new Password({                             
        websiteName,
        password,
        photo,
        
    })
    post.save()
    .then(created=>{
          console.log(created)
          res.json({post:created})
    })
})

router.get('/allpost',(req,res)=>{
    Password.find()
    
    .then(result=>{
           res.json({result:result})
           
    })
})
router.get("/getpost",requireLogin,(req,res)=>{
     console.log(req.user)
    const {id}=req.user
    console.log(id)

    Post.find({postedBy:req.user._id})
    .then(result=>{
        res.json({getpost:result})
    })
    
})



module.exports=router