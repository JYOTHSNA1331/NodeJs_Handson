const express = require('express')
const app = express()

const middleware1 = (req,res,next) =>{
    console.log("middleware1")
    next()
}

const middleware2 = (req,res,next) =>{
    console.log("middleware2")
    next()
}

app.use(middleware2)

app.get("/link1",middleware1,(req,res)=>{
    res.send("<h1>middleware1 and middleware2</h1>")
   
})

app.get("/link2",(req,res)=>{
    res.send("<h1>middleware2</h1>")
    
})

app.get("/link3",(req,res)=>{
    res.send("<h1>middleware2</h1>")
   
})

app.get("/link4",middleware1,(req,res)=>{
    res.send("<h1>middleware1 and middleware2</h1>")

})

app.get("*",(req,res)=>{
    res.send("Page Not Found")
})

app.listen(3003,()=>{
    console.log("server started")
})