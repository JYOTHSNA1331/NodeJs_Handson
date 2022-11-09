const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
   
})

app.get("/api/main",(req,res)=>{
    res.send("<h1>Welcome to Node.js</h1>")
   
})

app.listen(3600,()=>{
    console.log("Application is running")
})