const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const Posts=new mongoose.Schema({

    website_name:{
        type:String,
        required:true
    },
  pas:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"Signup"
    }
})
mongoose.model('Post',Posts)