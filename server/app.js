const express=require('express')
const app=express()
const mongoose=require('mongoose')
const  {MONGOURI}=require('./keys.js')
const PORT=5000
mongoose.connect(MONGOURI,
    {
      useNewUrlParser:true,
       useUnifiedTopology:true
    })
mongoose.connection.on("connected",()=>{
    console.log("connected to database")
})
mongoose.connection.on("error",(err)=>{
    console.log("Error while connecting to the database")

})

require('./models/users')
require('./models/password')
app.use(express.json())


app.use(require('./routes/posts'))

app.listen(PORT,()=>{
    console.log('Server is running on port ',PORT);
})
