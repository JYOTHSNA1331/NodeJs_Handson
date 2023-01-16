const express=require("express")
const Checking= require("./routes/auth")

const app=express()

app.use(express.json())

app.use("/auth",Checking)
app.get("/",function (req,res) {
    console.log('Authentication and authorization')
    
})




app.listen(9090,()=>{
    console.log('server running')
})