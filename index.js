const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const createRoute=require('./routes/create')

//database
const connectDB=async()=>{
  try{
      await mongoose.connect(process.env.MONGO_URL)
      console.log("database is connected successfully!")

  }
  catch(err){
      console.log(err)
  }
}

dotenv.config()
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/create",createRoute)

app.listen(process.env.PORT,()=>{
  connectDB()
  console.log("app is running on port "+process.env.PORT)
})