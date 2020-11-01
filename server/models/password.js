const mongoose=require('mongoose')

const Password=new mongoose.Schema({

    websiteName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true

    }
})
mongoose.model("Password",Password)